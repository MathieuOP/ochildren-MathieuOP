import { datas } from 'src/datas';
/**
 * Initial State
 */
const initialState = {
  datas,
  dataHomePage: [],
  loginForm: {
    email: '',
    password: '',
    loading: false,
    loggedIn: false,
    error: false
  },
  registerForm: {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    loading: false,
    signedUp: false,
    error: false
  },
  usersToken: ''
};

/**
 * Types
 */
export const DATA_HOME_PAGE = 'DATA_HOME_PAGE';

// login
const HANDLE_LOGIN_CHANGE = 'HANDLE_LOGIN_CHANGE';
export const LOGIN_SUBMIT = 'ON_LOGIN_SUBMIT';
const LOGIN_RESET = 'LOGIN_RESET';
const LOGIN_ERROR = 'LOGIN_ERROR';
const LOGGED_IN = 'LOGGED_IN';

// forgotten
export const FORGOTTEN_SUBMIT = 'FORGOTTEN_SUBMIT';

// signup
const REGISTER_INPUT_CHANGE = 'REGISTER_INPUT_CHANGE';
export const SIGNUP_SUBMIT = 'SIGNUP_SUBMIT';
const SIGNEDUP = 'SIGNEDUP';
const SIGNUP_ERROR = 'SIGNUP_ERROR';
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
        loginForm: {
          ...state.loginForm,
          [action.name]: action.text,
          error: false
        }
      };

    case LOGIN_SUBMIT:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          loading: true
        }
      };

    case LOGGED_IN:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          loading: false,
          loggedIn: true
        },
        usersToken: action.token
      };

    case LOGIN_ERROR:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          error: true,
          loading: false
        }
      };

    case LOGIN_RESET:
      return {
        ...state,
        loginForm: {
          ...initialState.loginForm
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
          signedUp: true
        }
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        registerForm: {
          ...state.registerForm,
          error: true
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

export const loginSubmit = () => ({
  type: LOGIN_SUBMIT
});

export const loggedIn = token => ({
  type: LOGGED_IN,
  token
});

export const loginError = () => ({
  type: LOGIN_ERROR
});

export const loginReset = () => ({
  type: LOGIN_RESET
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

export const signedUp = () => ({
  type: SIGNEDUP
});

export const signeUpError = () => ({
  type: SIGNUP_ERROR
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
