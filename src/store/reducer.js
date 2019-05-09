import { datas } from 'src/datas';
/**
 * Initial State
 */
const initialState = {
  datas,
  dataHomePage: [],
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
export const DATA_HOME_PAGE = 'DATA_HOME_PAGE';

// form
export const HANDLE_LOGIN_CHANGE = 'HANDLE_LOGIN_CHANGE';
export const ON_LOGIN_SUBMIT = 'ON_LOGIN_SUBMIT';
export const FORGOTTEN_SUBMIT = 'FORGOTTEN_SUBMIT';

/**
 * Traitements
 */


/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DATA_HOME_PAGE:
      return {
        ...state,
        dataHomePage: [...action.data]
      };
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
    case FORGOTTEN_SUBMIT:
      return {
        ...state,
      }

    default:
      return state;
    }
};

/**
 * Action Creators
 */
export const handleLoginChange = (text, name) => ({
  type: HANDLE_LOGIN_CHANGE,
  text,
  name
});

export const onLoginSubmit = () => ({
  type: ON_LOGIN_SUBMIT,
});

export const forgottenSubmit = () => ({
  type: FORGOTTEN_SUBMIT,
});

/**
 * Selectors
 */
export const dataForHomePage = () => ({
  type: DATA_HOME_PAGE
});

/**
 * Export
 */
export default reducer;
