import { createStore, combineReducers } from 'redux';
import counterReducer from './reducer';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export const store = createStore(rootReducer);
