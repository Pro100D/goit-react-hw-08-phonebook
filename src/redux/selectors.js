export const contactsSelector = state => state.contacts.items;
export const filterSelector = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectIsLoggedIn = state => state.register.isLoggedIn;
export const selectEmail = state => state.register.user.email;
