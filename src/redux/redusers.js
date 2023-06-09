import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import { contactReducer } from './Slices/ContactsSlise';
import { filterReducer } from './Slices/FilterSlice';
import { AuthReducer } from './Slices/AuthSlice';

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfig, AuthReducer);

export const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  register: persistedAuthReducer,
});
