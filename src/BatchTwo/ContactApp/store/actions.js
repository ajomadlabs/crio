export const saveContacts = (data) => {
  return {
    type: 'SAVE_CONTACTS',
    payload: data,
  };
};
