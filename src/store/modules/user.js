import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  query,
  collection,
  where,
  getDocs,
  increment,
} from 'firebase/firestore';
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from 'firebase/storage';
import db from '../../firebaseData';

export default {
  namespaced: true,
  state() {
    return {
      data: null,
      auth: {
        isProcessing: false,
        error: '',
      },
    };
  },
  getters: {
    IS_AUTHENTICATED(state) {
      return !!state.data;
    },
    isExchangeOwner: (state) => (exchangeUserId) =>
      state.data && exchangeUserId && state.data.id === exchangeUserId,
  },

  actions: {
    async UPLOAD_IMAGE(_, { bytes, name, onSuccess, onProgress }) {
      const storage = getStorage();
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, bytes);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          onProgress(progress);
        },
        (error) => {
          console.error(error.message);
        },
        async () => {
          const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
          onSuccess(downloadUrl);
        }
      );
    },

    ON_AUTH_CHANGE({ dispatch, commit }, callback) {
      commit('SET_AUTH_IS_PROCESSING', true);
      onAuthStateChanged(getAuth(), async (user) => {
        if (user) {
          await dispatch('GET_USER_PROFILE', user);
          commit('SET_AUTH_IS_PROCESSING', false);
          callback(user);
        } else {
          commit('SET_AUTH_IS_PROCESSING', false);
          callback(null);
        }
      });
    },

    async BUY_CREDIT({ commit, dispatch }, { data, onSuccess }) {
      const userRef = doc(db, 'users', data.id);
      if (data.credit) {
        await updateDoc(userRef, { credit: increment(data.credit) });
        commit('user/UPDATE_CREDIT', data.credit, { root: true });
      }
      dispatch('toast/success', "You've added funds to the account", {
        root: true,
      });
      onSuccess();
    },

    async UPDATE_PROFILE({ commit, dispatch }, { data, onSuccess }) {
      const userRef = doc(db, 'users', data.id);

      if (data.exchanges) {
        delete data.exchanges;
      }

      await updateDoc(userRef, data);
      commit('UPDATE_PROFILE', data);
      dispatch('toast/success', 'Profile has been updated!', { root: true });
      onSuccess();
    },

    async GET_USER_PROFILE({ commit }, user) {
      const docRef = doc(db, 'users', user.uid);
      const docSnapshot = await getDoc(docRef);
      const userProfile = docSnapshot.data();

      const docQuery = query(
        collection(db, 'exchanges'),
        where('user', '==', docRef)
      );

      const querySnapshot = await getDocs(docQuery);
      const exchanges = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      const userWithProfile = {
        id: user.uid,
        email: user.email,
        ...userProfile,
        exchanges,
      };
      commit('SET_USER', userWithProfile);
    },

    async REGISTER({ commit, dispatch }, { email, password, username }) {
      commit('SET_AUTH_IS_PROCESSING', true);
      commit('SET_AUTH_ERROR', '');
      try {
        const { user } = await createUserWithEmailAndPassword(
          getAuth(),
          email,
          password
        );
        await dispatch('createUserProfile', {
          id: user.uid,
          username,
          avatar:
            'https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png',
          credit: 0,
          exchanges: [],
        });
      } catch (err) {
        commit('SET_AUTH_ERROR', err.message);
        dispatch('toast/error', err.message, { root: true });
      } finally {
        commit('SET_AUTH_IS_PROCESSING', false);
      }
    },

    async LOGIN({ commit, dispatch }, { email, password }) {
      commit('SET_AUTH_IS_PROCESSING', true);
      commit('SET_AUTH_ERROR', '');
      try {
        await signInWithEmailAndPassword(getAuth(), email, password);
      } catch (err) {
        commit('SET_AUTH_ERROR', err.message);
        dispatch('toast/error', err.message, { root: true });
      } finally {
        commit('SET_AUTH_IS_PROCESSING', false);
      }
    },

    async LOGOUT({ commit }) {
      try {
        await signOut(getAuth());
        commit('SET_USER', null);
      } catch (error) {
        console.log('Cannot logout');
      }
    },

    async createUserProfile(_, { id, ...profile }) {
      await setDoc(doc(db, 'users', id), { ...profile, id });
    },
  },

  mutations: {
    SET_AUTH_IS_PROCESSING(state, isProcessing) {
      state.auth.isProcessing = isProcessing;
    },
    SET_AUTH_ERROR(state, error) {
      state.auth.error = error;
    },
    SET_USER(state, user) {
      state.data = user;
    },
    UPDATE_PROFILE(state, profile) {
      state.data = { ...state.data, ...profile };
    },
    UPDATE_CREDIT(state, credit) {
      state.data.credit += credit;
    },
  },
};
