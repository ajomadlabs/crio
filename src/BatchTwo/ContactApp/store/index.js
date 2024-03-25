import { createStore, combineReducers } from 'redux';
import contacts from './reducer';

const rootReducer = combineReducers({
  contacts,
});

export const store = createStore(rootReducer);
