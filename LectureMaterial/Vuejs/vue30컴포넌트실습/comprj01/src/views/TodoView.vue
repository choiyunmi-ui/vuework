<style scoped>
body {
  text-align: center;
  background-color: #f6f6f8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>

<template>
  <div id="app">
    <!-- TodoHeader -->
    <TodoHeader></TodoHeader>
    <!-- TodoInput -->

    <!-- TodoList -->
    <TodoList
      v-bind:todoItems="todoItems"
      v-on:doneToggle="doneToggle"
      v-on:removeTodo="removeTodo"
    >
    </TodoList>

    <TodoInput v-on:addTodo="addTodo"></TodoInput>

    <!-- TodoFooter -->
    <TodoFooter v-on:clearAll="clearAll"></TodoFooter>
  </div>
</template>
<script>
// vuex 라이브러리에서 mapActions, mapMutations, mapState, mapGetters 함를 가져옵니다.
// import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';
import TodoHeader from '../components/todo/TodoHeader.vue';
import TodoFooter from '../components/todo/TodoFooter.vue';
import TodoInput from '../components/todo/TodoInput.vue';
import TodoList from '../components/todo/TodoList.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
  /* pdtmc^2w */
  props: [],
  data() {
    return {
      //todoItems: [
      //  { id: 1, todo: '영화보기', done: false },
      //  { id: 2, todo: '주말 산책', done: true },
      //  { id: 3, todo: 'ES6 학습', done: false },
      //  { id: 4, todo: '잠실 야구장', done: false },
      // ],
    };
  },
  //template: ``,
  methods: {
    clearAll(e) {
      console.log(e.target);
      //this.$data.todoItems = [];
      //this.$data.todoItems = [];
    },
    addTodo(e, newTodoItem) {
      console.log(e.target);
      console.log(newTodoItem);
      if (!newTodoItem) {
        return;
      }

      const ids = this.$data.todoItems.map((item) => item.id);
      console.log(ids);
      const maxid = ids.reduce((pvalue, cvalue) => {
        if (pvalue > cvalue) return pvalue;
        else return cvalue;
      }, 0);
      console.log(maxid);
      const newid = maxid + 1;

      const newTodo = {
        id: newid,
        todo: newTodoItem,
        done: false,
      };

      // todoItems 배열에 객체 추가 복제후 재할당
      //this.$data.todoItems;
      this.$data.todoItems = [...this.$data.todoItems, newTodo];
    },

    doneToggle(id) {
      //debugger;
      console.log(id);
      //불변객체 = > 복제후 재할당 방식으로 처리 ===> 1. map , filter , reduce 2.spread 연산자 3. immer 라리브러리, immutable 라이브러리
      // const newTodos = this.$data.todoItems.map((item /*, index ,array*/) => {
      //   if (item.id === id) {
      //     item.done = !item.done;
      //   }
      //   return item;
      // }); // 복제
      // this.$data.todoItems = newTodos; // 재할당
    },
    removeTodo(id) {
      //debugger;
      console.log(id);
      const newTodos = this.$data.todoItems.filter((item) => {
        if (item.id === id) {
          return false;
        }
        return true;
      });
      this.$data.todoItems = newTodos; // 변수가 바뀐지 모른다. 그래서 복수후 재할당
    },

    ...mapActions('storeTodo', {
      dispatchClearAll: 'clearAll',
      dispatchDoneToggle: 'doneToggle',
      dispatchRemoveTodo: 'RemoveTodo',
      dispatchAddTodo: 'addTodo',
    }),
  },
  components: {
    TodoHeader: TodoHeader,
    TodoFooter: TodoFooter,
    TodoInput: TodoInput,
    TodoList: TodoList,
  },
  computed: {
    ...mapGetters('todoStore', ['todoItems']),
  },
  watch: {
    /* 자동처리 + 비동기식. data 에 등록된 프로퍼티(변수) 모니터링. 메서드로 작성. 매개변수 필수. 외부 api 호출을 위해서 사용 */
  },
  created() {
    console.log('created');
  },
  mounted() {
    console.log('mounted');
    /* store의 actions 호출 */
    // this.$store.dispatch('액션명', payload);
  },
  updated() {
    console.log('updated');
  },
};
</script>
