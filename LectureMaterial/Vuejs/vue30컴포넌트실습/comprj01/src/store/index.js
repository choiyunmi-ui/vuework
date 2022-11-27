import { createStore } from 'vuex';
import counterStore from './modules/counterStore';
import todoStore from './modules/todoStore.js';

export default createStore({
  //state: {},
  //getters: {},
  //mutations: {},
  //actions: {},
  modules: {
    counterStore: counterStore,
    todoStore: todoStore,
  },
});
