import { configureStore } from '@reduxjs/toolkit';

import todoReducer from './slices/Todo.store';

export default configureStore({
  reducer: {
    todo: todoReducer,
  },
});
