/**
 * Initial State
 */
const initialState = {
  userForm: {
    loggedIn: false,
    loading: false,
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    identifiant: '',
    birthday: '',
  }
};

/**
 * Types
 */

// form
export const HANDLE_LOGIN_CHANGE = 'HANDLE_LOGIN_CHANGE';
export const ON_LOGIN_SUBMIT = 'ON_LOGIN_SUBMIT';

/**
 * Traitements
 */


/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // form
   case HANDLE_LOGIN_CHANGE:
    return {
      ...state,
      userForm: {
        ...state.userForm,
        [action.name]: action.text,
      }
    };
   case ON_LOGIN_SUBMIT:
   return {
     ...state,
     userForm: {
       ...state.userForm,
       loading: true
     }
   };
    

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const handleloginChange = (text, name) => ({
  type: HANDLE_LOGIN_CHANGE,
  text,
  name
});

export const onLoginSubmit = () => ({
  type: ON_LOGIN_SUBMIT,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
