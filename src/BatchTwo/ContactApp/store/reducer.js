import initialState from './state';

function contacts(state = initialState, action) {
  switch (action.type) {
    case 'SAVE_CONTACTS': {
      return {
        ...state,
        contacts: [...action.payload],
      };
    }
    default:
      return state;
  }
}
export default contacts;
