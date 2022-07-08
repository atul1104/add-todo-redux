import todoReducers from './todoReducers';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  todoReducers,
});

export default reducer;
