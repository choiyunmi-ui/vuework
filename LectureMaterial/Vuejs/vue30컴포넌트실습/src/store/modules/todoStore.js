// Vuex store 모듈 만들기
import axios from 'axios';

const store = {
  namespaced: true /* 모듈 store 여부 설정 */,
  actions: {
    /* 왜 actions를 사용하나? 비동기로 외부 함수 호출하기 위해서
     * actions 에는 메서드만 등록 가능하다.
     * 첫번째인자: 무조건 mutations로 고정.
     * 두번째인자: 값. store.dispatch()호출시 넘겨지는 값.
     */

    clearAll(mutations /* 고정 */) {
      const { commit } = mutations;
      commit('clearAll');
    },
    doneToggle(mutations /* 고정 */, id) {
      const { commit } = mutations;
      commit('doneToggle', id);
    },
    removeTodo(mutations /* 고정 */, id) {
      const { commit } = mutations;
      commit('removeTodo', id);
    },
    addTodo(mutations /* 고정 */, newTodoItem) {
      const { commit } = mutations;
      commit('addTodo', newTodoItem);
    },
    getTodo(mutations /* 고정 */) {
      const { commit } = mutations;
      commit('getTodo');
    },
    set(mutations /* 고정 */, payload) {
      const { commit } = mutations;
      commit('set', payload);
    },
    get(mutations /* 고정 */, payload) {
      const { commit } = mutations;
      commit('get', payload);
    },
  },
  mutations: {
    clearAll(mutations /* 고정 */) {
      const { commit } = mutations;
      commit('clearAll');
    },
    doneToggle(mutations /* 고정 */, id) {
      const { commit } = mutations;
      commit('doneToggle', id);
    },
    removeTodo(mutations /* 고정 */, id) {
      const { commit } = mutations;
      commit('removeTodo', id);
    },
    addTodo(mutations /* 고정 */, newTodoItem) {
      const { commit } = mutations;
      commit('addTodo', newTodoItem);
    },
    getTodo(mutations /* 고정 */) {
      const { commit } = mutations;
      commit('getTodo');
    },
    /* 왜 mutations 를 사용하나? state 를 바꾸기 위해서
     * mutations 에는 메서드만 등록 가능하다.
     * 첫번째인자: 무조건 state 로 고정.
     * 두번째인자: 값. mutations.commit() 호출시 넘겨지는 값.
     * */
    set(state /* 고정 */, param /* mutations.commit 호출시 넘겨지는 값 */) {
      state.인자 = param;
    },
    get(state /* 고정 */, param /* mutations.commit 호출시 넘겨지는 값 */) {
      state.인자 = param;
    },
  },
  state: {
    /* vue인스턴스나 컴포넌트의 data 프로퍼티에 해당 */
    인자: 'STORE STATE',
    todoItems: [
      { id: 1, todo: '영화보기', done: false },
      { id: 2, todo: '주말 산책', done: true },
      { id: 3, todo: 'ES6 학습', done: false },
      { id: 4, todo: '잠실 야구장', done: false },
    ],
  },
  getters: {
    todoItems(state /* 고정 */) {
      return state.todoItems;
    },
    /* state 변경 정보를 컴포넌트에 전달하는 역활.
     * 메서드로 만들어야 하며 메서드명은 state 의 이름을 그대로 사용
     * 첫번째인자: 무조건 state
     * 컴포넌트에서는 computed를 사용하여 store의 state 변경 정보를 자동으로 가져오게 된다.
     * 예시) message()=> store.getters.인자;
     */
    인자(state /* 고정 */) {
      return state.인자;
    },
  },
};

export default store;
