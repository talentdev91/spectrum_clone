import { clearApolloStore } from '../api';
import { removeItemFromStorage, storeItem } from '../helpers/localStorage';

const eraseCookie = name => {
  console.log('name', name);
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

export const logout = () => {
  // clear localStorage
  removeItemFromStorage('spectrum');
  // clear Apollo's query cache
  clearApolloStore();
  // erase cookie
  eraseCookie('connect.sid');
  // redirect to home page
  window.location.href = '/';
};

export const saveUserDataToLocalStorage = (user: Object) => dispatch => {
  const obj = {};

  if (!user) {
    logout();
  }
  // construct a clean object that doesn't include any metadata from apollo
  // like __typename
  obj['currentUser'] = {
    id: user.id,
    name: user.name,
    username: user.username,
    profilePhoto: user.profilePhoto,
  };

  // save this object to localstorage. This will be used in the future to hydrate
  // the store when users visit the homepage
  storeItem('spectrum', obj);

  // dispatch to the store and save the user
  dispatch({
    type: 'SET_USER',
    user,
  });
};
