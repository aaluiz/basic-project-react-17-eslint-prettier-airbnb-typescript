import { combineReducers } from '@reduxjs/toolkit';

import todoReducer from './slices/Todo.store';

export default combineReducers({
  memo: todoReducer,
});
