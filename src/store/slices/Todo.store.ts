import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IText {
  text: string;
  isCompleted: boolean;
}

const todos: IText[] = [];

export const initialState = {
  todos,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<IText>) {
      state.todos.push(action.payload);
    },
    completeTodo(state, action: PayloadAction<number>) {
      const updateTodo = { ...state.todos[action.payload] };
      state.todos.slice(action.payload, 1);
      updateTodo.isCompleted = !updateTodo.isCompleted;
      state.todos.splice(action.payload, 0, updateTodo);
    },
    removeTodo(state, action: PayloadAction<number>) {
      state.todos.slice(action.payload, 1);
    },
  },
});

export const { addTodo, completeTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
