import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import createMigrate from 'redux-persist/es/createMigrate';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import reducer from './combinedReducers';
import migrations from './migrations';

const persistConfig = {
  key: 'front',
  version: 0,
  debug: true,
  storage,
  migrate: createMigrate(migrations, { debug: true }),
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export default store;
