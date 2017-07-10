export default {
  namespace: 'todoList',
  state: {
    todoList: [],
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
    },
    clear(state ){
      state.current='';
      return {...state}
    },
  },
  effects: {
    *create({payload:{todo}},{select,call,put}){
      const current=yield select(state=>state.todoList.current);//该state是全局state
      yield console.log('当前添加的数据:'+current);
      yield put({type:'clear'})
    }
  },
  subscriptions: {},
};
