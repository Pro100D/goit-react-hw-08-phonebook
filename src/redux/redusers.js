import { combineReducers } from 'redux';
import { contactReducer } from './Slices/ContactsSlise';
import { filterReducer } from './Slices/FilterSlice';
import { AuthReducer } from './Slices/AuthSlice';

export const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
  register: AuthReducer,
});
