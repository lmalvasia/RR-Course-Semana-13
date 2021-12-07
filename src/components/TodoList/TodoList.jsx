import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo } from '../../redux/actions/todosActions';
import AddTodo from './AddTodo';
import styles from './todoList.module.css';

const TodoList = () => {
  const [showTodoForm, toggleTodoForm] = useState(false);
  const todos = useSelector(store => store.todos.list)
  const dispatch = useDispatch()

  const addNewTodo = text => {
    dispatch(addTodo(text));
    toggleTodoForm(!showTodoForm);
  };

  return (
    <div className={styles.todosContainer}>
      <button
        className={styles.addTodoButton}
        onClick={() => toggleTodoForm(!showTodoForm)}
      >
        Add TODO
      </button>
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
            return (
              <tr key={todo.id}>
                <td 
                  onClick={() => dispatch(toggleTodo(todo.id))}
                  className={todoStyle}
                >
                  {todo.text}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
};

export default TodoList;