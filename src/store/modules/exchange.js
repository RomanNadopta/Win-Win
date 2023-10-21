import db from '@/firebaseData';

import {
  getDocs,
  getDoc,
  deleteDoc,
  query,
  where,
  collection,
  doc,
  addDoc,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore';
import slugify from 'slugify';

export default {
  namespaced: true,
  state() {
    return {
      creditCardImg: {},
      items: [],
      item: {},
      exchanges: [],
      categories: [
        {
          name: 'games',
          image:
            'https://firebasestorage.googleapis.com/v0/b/exchange-gallery-4ee55.appspot.com/o/categories%2Fgames.jpg?alt=media&token=c66055ca-de13-462e-a3b9-82d9edf876e2',
          title:
            'The world of games does not let you grow old. Find your best game and enjoy it with your friends.',
        },
        {
          name: 'vehicles',
          image:
            'https://firebasestorage.googleapis.com/v0/b/exchange-gallery-4ee55.appspot.com/o/categories%2Fcars.jpg?alt=media&token=429993d3-fae4-48fa-93cf-e53d84cbfc6b',
          title:
            'Here you will find many impressive cars to satisfy your taste.',
        },
        {
          name: 'phones & pc',
          image:
            'https://firebasestorage.googleapis.com/v0/b/exchange-gallery-4ee55.appspot.com/o/categories%2Fphones-and-pc.jpg?alt=media&token=8965ba4c-ec65-4a82-a091-097b6bfd7d65',
          title:
            'Find your favourite phone or PC and always be online with friends or colleagues.',
        },
        {
          name: 'sport',
          image:
            'https://firebasestorage.googleapis.com/v0/b/exchange-gallery-4ee55.appspot.com/o/categories%2Fsport.jpg?alt=media&token=9583c552-9ced-4ab4-b801-75aabc5d0323',
          title:
            'Movement is life, always be in good shape to achieve your dreams.',
        },
        {
          name: 'clothes',
          image:
            'https://firebasestorage.googleapis.com/v0/b/exchange-gallery-4ee55.appspot.com/o/categories%2Fclothes.jpg?alt=media&token=9f5f8af2-9e48-4012-ae47-0f88f8255aff',
          title:
            'Clothes do not make you a better person than you are, they just make you look more attractive. Choose your style!',
        },
        {
          name: 'services',
          image:
            'https://firebasestorage.googleapis.com/v0/b/exchange-gallery-4ee55.appspot.com/o/categories%2Fservice.jpg?alt=media&token=3d2a47b8-5055-47b2-8d73-117342d1cca3',
          title:
            'It saves your time and nerves. Let the professionals do their job and make you happy!',
        },
        {
          name: 'home',
          image:
            'https://firebasestorage.googleapis.com/v0/b/exchange-gallery-4ee55.appspot.com/o/categories%2Fhome.jpg?alt=media&token=9a7966eb-b15a-4af2-bc1e-807dfecaf583',
          title:
            'Everything for home comfort. Find what you are missing at home.',
        },
        {
          name: 'beauty',
          image:
            'https://firebasestorage.googleapis.com/v0/b/exchange-gallery-4ee55.appspot.com/o/categories%2Fbeauty.jpg?alt=media&token=3afb631d-3476-4916-a47c-4878f906b6c4',
          title:
            'Beauty is a power that conquers hearts. But it is just a tool, don not forget who you are.',
        },

        {
          name: 'other',
          image:
            'https://firebasestorage.googleapis.com/v0/b/exchange-gallery-4ee55.appspot.com/o/categories%2Fother.jpg?alt=media&token=47f2bfbc-8da1-49cd-84db-2cadcabf63eb',
          title:
            'If you did not find what you were looking for in the previous categories, you might find what you are looking for here.',
        },
      ],
    };
  },

  mutations: {
    SET_CREDIT_CARD_IMAGES(state, creditCard) {
      state.creditCardImg = creditCard;
    },
    SET_EXCHANGES(state, exchanges) {
      state.items = exchanges;
    },
    SET_EXCHANGE(state, exchange) {
      state.item = exchange;
    },
    SET_LAST_ITEM(state, item) {
      state.pagination.lastItem = item;
    },
    SET_IS_FETCHING(state, isFetching) {
      state.pagination.isFetchingData = isFetching;
    },
  },

  getters: {
    FILTER_EXCHANGES: (state) => (searchedExchange) => {
      const { items } = state;
      if (!searchedExchange) {
        return items;
      }

      const filteredExchanges = items.filter((item) => {
        const toLowerCaseTag = item.tags.map((tag) => tag.toLowerCase());
        return (
          (item.title &&
            item.title
              .toLowerCase()
              .includes(searchedExchange.toLowerCase())) ||
          toLowerCaseTag.includes(searchedExchange.toLowerCase())
        );
      });
      return filteredExchanges;
    },
  },

  actions: {
    async GET_CREDIT_CARD_IMAGES({ commit }) {
      commit('SET_CREDIT_CARD_IMAGES', {});
      const docQuery = query(collection(db, 'creditCard'));

      const snapshot = await getDocs(docQuery);
      const creditCardImages = snapshot.docs[0].data();
      commit('SET_CREDIT_CARD_IMAGES', creditCardImages);
    },

    async GET_CATEGORIES_BY_TYPE({ commit }, type) {
      commit('SET_EXCHANGES', {});
      const docQuery = query(
        collection(db, 'exchanges'),
        orderBy('createdAt', 'desc'),
        where('type', '==', type)
      );

      const querySnapshot = await getDocs(docQuery);
      const exchanges = querySnapshot.docs.map((doc) => doc.data());
      commit('SET_EXCHANGES', exchanges);
    },

    async GET_EXCHANGE_BY_SLUG({ commit }, slug) {
      commit('SET_EXCHANGE', {});
      const docQuery = query(
        collection(db, 'exchanges'),
        where('slug', '==', slug)
      );

      const querySnapshot = await getDocs(docQuery);
      const exchange = querySnapshot.docs[0].data();
      exchange.id = querySnapshot.docs[0].id;

      const userSnapshot = await getDoc(exchange.user);
      exchange.user = userSnapshot.data();
      exchange.user.id = userSnapshot.id;

      commit('SET_EXCHANGE', exchange);
    },

    async GET_EXCHANGES({ commit, state }) {
      const exchangeQuery = query(
        collection(db, 'exchanges'),
        orderBy('createdAt', 'desc')
      );
      const snapshot = await getDocs(exchangeQuery);

      const exchanges = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      state.exchanges = exchanges.splice(0, 6);

      commit('SET_EXCHANGES', exchanges);
    },

    async CREATE_EXCHANGES({ rootState, dispatch }, { data, onSuccess }) {
      const userRef = doc(db, 'users', rootState.user.data.id);
      data.user = userRef;

      data.slug = slugify(`${data.title} ${Date.now()}`, {
        lower: true,
        strict: true,
      });

      data.createdAt = serverTimestamp();

      await addDoc(collection(db, 'exchanges'), data);
      dispatch('toast/success', 'Exchange created successfully!', {
        root: true,
      });
      onSuccess();
    },

    async DELETE_EXCHANGE({ dispatch }, { id }) {
      const docRef = doc(db, 'exchanges', id);

      await deleteDoc(docRef);

      dispatch('toast/success', 'Exchange deleted successfully!', {
        root: true,
      });
    },
  },
};
