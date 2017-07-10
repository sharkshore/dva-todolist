import React from 'react';
import {connect} from 'dva';

/**
 无状态组件,函数式写法,没有this.state,只有this.props(即函数的参数)
 */
function TodoList({dispatch, todoList}) {

  function create(todo) {
    dispatch({type: 'todoList/create', payload: {todo}})
  }

  function remove(todo) {
    dispatch({type: 'todoList/remove', payload: {todo}})
  }

  function change(todo) {
    dispatch({type: 'todoList/change', payload: {todo}})
  }

  return (
    <div >
      <div>
        <form onSubmit={create.bind(this, todoList.current)}>
          <input type="text" onChange={event => change(event.target.value)} value={todoList.current}/>
          <button type="submit">添加</button>
        </form>
      </div>
      <h3>列表</h3>
      <ul>
        {
          todoList.todoList.map((todo, i) =>
            (
              <li key={i}>
                <span style={{marginRight: '15px'}}>{i + 1}</span>
                <span style={{marginRight: '15px'}}>{todo}</span>
                <span style={{marginRight: '15px'}}>
                  <button onClick={remove.bind(this, todo)}>X</button>
                </span>
              </li>
            )
          )
        }
      </ul>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return {
    todoList: state.todoList
  };
}

export default connect(mapStateToProps)(TodoList);
