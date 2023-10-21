import db from '@/firebaseData';
import {
  doc,
  Timestamp,
  addDoc,
  deleteDoc,
  collection,
  query,
  where,
  getDocs,
  getDoc,
  updateDoc,
  increment,
  orderBy,
} from 'firebase/firestore';

const extractDataFromOpportunity = async (opportunity, id) => {
  if (opportunity.fromExchange) {
    const fromExchangeDoc = await getDoc(opportunity.fromExchange);
    opportunity.fromExchange = {
      ...fromExchangeDoc.data(),
      id: fromExchangeDoc.id,
    };
  }

  const toExchangeDoc = await getDoc(opportunity.toExchange);
  opportunity.toExchange = {
    ...toExchangeDoc.data(),
    id: toExchangeDoc.id,
  };

  const fromUserDoc = await getDoc(opportunity.fromUser);
  opportunity.fromUser = {
    ...fromUserDoc.data(),
    id: fromUserDoc.id,
  };
  opportunity.id = id;

  return opportunity;
};

export default {
  namespaced: true,
  state() {
    return {
      opportunities: [],
      sendOpportunities: [],
    };
  },
  actions: {
    async GET_OPPORTUNITIES({ rootState, dispatch, commit }) {
      if (rootState.user.data !== null) {
        const { id } = rootState.user.data;
        if (!id) {
          dispatch('toast/error', 'User is not logged in!', { root: true });
        }

        const opportunityQuery = query(
          collection(db, 'opportunities'),
          orderBy('createdAt', 'desc'),
          where('toUser', '==', doc(db, 'users', id))
        );
        const opportunitiesSnapshot = await getDocs(opportunityQuery);
        const opportunities = await Promise.all(
          opportunitiesSnapshot.docs.map((doc) =>
            extractDataFromOpportunity(doc.data(), doc.id)
          )
        );

        commit('SET_OPPORTUNITIES', {
          resource: 'opportunities',
          opportunities,
        });
      }
    },

    async GET_SEND_OPPORTUNITIES({ rootState, dispatch, commit }) {
      if (rootState.user.data !== null) {
        const { id } = rootState.user.data;
        if (!id) {
          dispatch('toast/error', 'User is not logged in!', { root: true });
        }

        const opportunityQuery = query(
          collection(db, 'opportunities'),
          orderBy('createdAt', 'desc'),
          where('fromUser', '==', doc(db, 'users', id))
        );
        const opportunitiesSnapshot = await getDocs(opportunityQuery);
        const opportunities = await Promise.all(
          opportunitiesSnapshot.docs.map((doc) =>
            extractDataFromOpportunity(doc.data(), doc.id)
          )
        );

        commit('SET_OPPORTUNITIES', {
          resource: 'sendOpportunities',
          opportunities,
        });
      }
    },

    async CREATE_OPPORTUNITY({ dispatch, commit }, { data, onSuccess }) {
      const opportunity = {
        title: data.title,
        createdAt: Timestamp.fromDate(new Date()),
        toUser: doc(db, 'users', data.toUserId),
        fromUser: doc(db, 'users', data.fromUserId),
        toExchange: doc(db, 'exchanges', data.toExchangeId),
        status: 'pending',
      };

      if (data.fromExchangeId) {
        opportunity.fromExchange = doc(db, 'exchanges', data.fromExchangeId);
      } else {
        opportunity.price = data.price;
      }
      await addDoc(collection(db, 'opportunities'), opportunity);
      if (opportunity.price) {
        await updateDoc(opportunity.fromUser, {
          credit: increment(-opportunity.price),
        });
        commit('user/UPDATE_CREDIT', -opportunity.price, { root: true });
      }

      dispatch('toast/success', 'Opportunity was send!', { root: true });

      onSuccess();
    },

    async ACCEPT_OPPORTUNITY({ commit, dispatch }, { opportunity, onSuccess }) {
      const toExchangeId = opportunity.toExchange.id;

      const toExchangeRef = doc(db, 'exchanges', toExchangeId);
      await updateDoc(toExchangeRef, { status: 'sold' });

      if (opportunity.fromExchange) {
        const fromExchangeId = opportunity.fromExchange.id;

        const fromExchangeRef = doc(db, 'exchanges', fromExchangeId);
        await updateDoc(fromExchangeRef, { status: 'sold' });
      }

      const oppRef = doc(db, 'opportunities', opportunity.id);
      await updateDoc(oppRef, { status: 'accepted' });
      if (opportunity.price) {
        const toUserRef = doc(db, 'users', opportunity.toUser.id);
        await updateDoc(toUserRef, {
          credit: increment(opportunity.price),
        });
        commit('user/UPDATE_CREDIT', opportunity.price, { root: true });
      }

      commit('CHANGE_OPPORTUNITY_STATUS', {
        id: opportunity.id,
        status: 'accepted',
      });
      dispatch('toast/success', 'Opportunity was accepted', { root: true });
      onSuccess();
    },

    async DECLINE_OPPORTUNITY(
      { commit, dispatch },
      { opportunity, onSuccess }
    ) {
      const oppRef = doc(db, 'opportunities', opportunity.id);
      await updateDoc(oppRef, { status: 'declined' });
      if (opportunity.price) {
        const fromUserRef = doc(db, 'users', opportunity.fromUser.id);
        await updateDoc(fromUserRef, {
          credit: increment(opportunity.price),
        });
      }

      commit('CHANGE_OPPORTUNITY_STATUS', {
        id: opportunity.id,
        status: 'declined',
      });

      dispatch('toast/error', 'Opportunity was declined', { root: true });
      onSuccess();
    },

    async DELETE_OPPORTUNITY({}, { opportunityId, opportunity }) {
      if (opportunityId) {
        const oppRef = doc(db, 'opportunities', opportunityId.id);
        await deleteDoc(oppRef);
      }

      if (opportunity) {
        const oppRef = doc(db, 'opportunities', opportunity.id);
        await updateDoc(oppRef, { status: 'declined' });
        if (opportunity.price && opportunity.status === 'pending') {
          const fromUserRef = doc(db, 'users', opportunity.fromUser.id);
          await updateDoc(fromUserRef, {
            credit: increment(opportunity.price),
          });
        }

        const opprefDet = doc(db, 'opportunities', opportunity.id);

        await deleteDoc(opprefDet);
      }
    },
  },
  mutations: {
    SET_OPPORTUNITIES(state, { resource, opportunities }) {
      state[resource] = opportunities;
    },
    CHANGE_OPPORTUNITY_STATUS(state, { id, status }) {
      const index = state.opportunities.findIndex((o) => o.id === id);
      state.opportunities[index].status = status;
    },
  },
};
