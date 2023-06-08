import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../redux/redusers';

export const store = configureStore({
  reducer: rootReducer,
});
