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
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    identifiant: ''
  },
  registerForm: {
    firstName: '',
    lastName: '',
    email: '',
    identifiant: '',
    password: '',
    confirmPassword: '',
    loading: false,
    signedUp: false,
    error: false
  }
};

/**
 * Types
 */
export const DATA_HOME_PAGE = 'DATA_HOME_PAGE';

// login
const HANDLE_LOGIN_CHANGE = 'HANDLE_LOGIN_CHANGE';
export const ON_LOGIN_SUBMIT = 'ON_LOGIN_SUBMIT';

// forgotten
export const FORGOTTEN_SUBMIT = 'FORGOTTEN_SUBMIT';

// signup
const REGISTER_INPUT_CHANGE = 'REGISTER_INPUT_CHANGE';
export const SIGNUP_SUBMIT = 'SIGNUP_SUBMIT';
const SIGNEDUP = 'SIGNEDUP';
const SIGNUP_TOGGLE_ERROR = 'SIGNUP_TOGGLE_ERROR';
const SIGNUP_RESET = 'SIGNUP_RESET';

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
          [action.name]: action.text
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

    case REGISTER_INPUT_CHANGE:
      return {
        ...state,
        registerForm: {
          ...state.registerForm,
          [action.name]: action.text
        }
      };

    case SIGNUP_SUBMIT:
      return {
        ...state,
        registerForm: {
          ...state.registerForm,
          loading: true
        }
      };

    case SIGNEDUP:
      return {
        ...state,
        registerForm: {
          ...state.registerForm,
          loading: false,
          signedUp: true,
          data: action.data
        }
      };

    case SIGNUP_TOGGLE_ERROR:
      return {
        ...state,
        registerForm: {
          ...state.registerForm,
          error: !state.registerForm.error
        }
      };

    case SIGNUP_RESET:
      return {
        ...state,
        registerForm: {
          ...initialState.registerForm
        }
      };

    case FORGOTTEN_SUBMIT:
      return {
        ...state
      };

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

export const registerInputChange = (text, name) => ({
  type: REGISTER_INPUT_CHANGE,
  text,
  name
});

export const onLoginSubmit = () => ({
  type: ON_LOGIN_SUBMIT
});

export const forgottenSubmit = () => ({
  type: FORGOTTEN_SUBMIT
});

export const dataForHomePage = () => ({
  type: DATA_HOME_PAGE
});

export const signupSubmit = () => ({
  type: SIGNUP_SUBMIT
});

export const signedUp = data => ({
  type: SIGNEDUP,
  data
});

export const signeUpToggleError = () => ({
  type: SIGNUP_TOGGLE_ERROR
});

export const signeUpReset = () => ({
  type: SIGNUP_RESET
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
