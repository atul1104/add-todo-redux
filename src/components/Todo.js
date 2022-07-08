import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../actions';
import './todo.css';

const Todo = () => {
  const [inputData, setInputData] = useState('');
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  return (
    <>
      <div id="container">
        <h1>
          To-Do List{' '}
          <i
            class="fa fa-plus"
            onClick={() => dispatch(addTodo(inputData), setInputData(''))}
          ></i>
        </h1>
        <input
          type="text"
          placeholder="Add todo"
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
        />

        <ul>
          {list.map((elm) => (
            <li key={elm.id}>
              <span>
                <i
                  class="fa fa-trash"
                  onClick={() => dispatch(deleteTodo(elm.id))}
                ></i>
              </span>{' '}
              {elm.data}
            </li>
          ))}
        </ul>
        <div className="center">
          <button className="rmv-btn" onClick={() => dispatch(removeTodo())}>
            Remove All
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;
