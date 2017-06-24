import axios from 'axios';
import config from '../../config';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export function createStore () {
  return new Vuex.Store({
    state: {
      heroes: [],
      cards: []
    },
    actions: {
      fetch({commit}, { store, endpoint, id }) {
        const base = config.proxy.base || '/api';

        let uri = 'http://localhost:3000' + base + '/' + endpoint;

        if (id) {
          uri += '/' + id;
        }

        return axios.get(uri)
            .then(function (response) {
              if (id) {
                commit('setItem', { store, id, item: response.data });
              } else {
                commit('replaceItems', { store, items: response.data });
              }
            })
            .catch(error => console.log(error));
      }
    },
    getters: {
      getItemById: state => (store, id) => state[store].find(item => item.id === id)
    },
    mutations: {
      setItem (state, { store, id, item }) {
        const idx = state[store].find(item => item.id === id);

        if (idx) {
          state[store][idx] = item;
        } else {
          state[store].push(item);
        }
      },

      replaceItems (state, { store, items }) {
        state[store] = items;
      }
    }
  });
}