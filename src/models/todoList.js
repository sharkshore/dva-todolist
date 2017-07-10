export default {
  namespace: 'todoList',
  state: {
    todoList: ['旅游'],
    current:''
  },
  reducers: {
    create(state,{payload:{todo}}){
      state.todoList.push(todo);
      return {...state}
    },
    remove(state, {payload:{todo}}){
      return {
        ...state,
        todoList:state.todoList.filter(t => todo != t )
      }
    },
    change(state, {payload:{todo}}){
      state.current=todo;
      return {...state}
    }
  },
  effects: {},
  subscriptions: {},
};
