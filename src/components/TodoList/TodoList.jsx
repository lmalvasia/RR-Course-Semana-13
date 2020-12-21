import React, { useState } from 'react';
import { connect } from 'react-redux';
import AddTodo from './AddTodo';
import {
  addTodo as addTodoAction,
  toggleTodo as toggleTodoAction
} from '../../redux/actions/todosActions';
import styles from './todoList.module.css';

const TodoList = ({
  todos,
  addTodo,
  toggleTodo
}) => {
  const [showTodoForm, toggleTodoForm] = useState(false);

  const addNewTodo = text => {
    addTodo(text);
    toggleTodoForm(!showTodoForm);
  };

  return (
    <div className={styles.todosContainer}>
      <button className={styles.addTodoButton} onClick={() => toggleTodoForm(!showTodoForm)}>Add TODO</button>
      {showTodoForm && <AddTodo addTodo={addNewTodo} />}
      <table className={styles.todosTable}>
        <thead>
          <tr>
            <th>TODO</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(todo => {
            const todoStyle = todo.completed ? styles.completedTodo : null;
            console.log(todoStyle);
            return (
              <tr key={todo.id}>
                <td onClick={() => toggleTodo(todo.id)} className={todoStyle}>{todo.text}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(addTodoAction(text)),
    toggleTodo: (id) => dispatch(toggleTodoAction(id))
  };
};

const mapStateToProps = state => {
  return {
    todos: state.todos.list
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);