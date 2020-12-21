import React, { useState } from 'react';
import styles from './todoList.module.css';

const AddTodo = (props) => {
  const [textInputValue, setTextInputValue] = useState('');

  const handleInputChange = (event) => {
    setTextInputValue(event.target.value);
  };

  const onSubmitTodo = (e) => {
    e.preventDefault();
    props.addTodo(textInputValue);
  };

  return (
    <div className={styles.addTodoContainer}>
      <form onSubmit={onSubmitTodo}>
        <input type="text" name="text" value={textInputValue} onChange={handleInputChange} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddTodo;