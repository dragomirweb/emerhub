import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'

import { firestore } from '../database/db'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      question1: '',
      question2: '',
      question3: '',
      question4: '',
      question5: '',
    },
    users: [],
  },
  mutations: {
    ...vuexfireMutations,
  },
  actions: {
    bindUsers: firestoreAction(({ bindFirestoreRef }, payload) => {
      // return the promise returned by `bindFirestoreRef`
      return bindFirestoreRef('users', firestore.collection('users'))
    }),
    setUser: firestoreAction(async ({ bindFirestoreRef }, payload) => {
      const session = firestore.collection('users').doc(payload)
      const doc = await session.get()

      if (!doc.exists) {
        await session.set({
          question1: '',
          question5: '',
          question2: '',
          question3: '',
          question4: '',
        })
      }
      return bindFirestoreRef('user', session)
    }),
    updateUser: firestoreAction(async ({ bindFirestoreRef }, payload) => {
      const session = firestore.collection('users').doc(payload.user)
      await session.set(payload.data)
      return bindFirestoreRef('user', session)
    }),
  },
  modules: {},
})
