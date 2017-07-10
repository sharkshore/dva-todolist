import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import TodoList from '../components/TodoList/TodoList'

function IndexPage() {
  return (
    <TodoList/>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
