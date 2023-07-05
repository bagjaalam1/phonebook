export const searchContacts = (state, action) => {
  const { name, phone } = action.payload;
  console.log(name, phone);

  const searchResult = state.contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(name.toLowerCase()) &&
      contact.phone.includes(phone)
  );

  return {
    ...state,
    searchKeyword: action.payload,
    searchResult,
  };
}; // ini dipakai di reducers slice ContactList
