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
    birthday: ''
  },
  indexQuiz: 0,
  dataHomeGame: [],
  categoriesQuizzs: [],
  currentSlugCatAge: '',
  currrentSlugCatQuizzs: '',
  quizzsByCategoryId: [],
  idCatAge: '',
  questionsOfQuiz: [],
  loading: false,
  disabledButton: true,
  message: '',
  score: 0,
  myScore: false,
  answerTrue: false
};

/**
 * Types
 */
export const DATA_HOME_PAGE = 'DATA_HOME_PAGE';

// form
export const HANDLE_LOGIN_CHANGE = 'HANDLE_LOGIN_CHANGE';
export const ON_LOGIN_SUBMIT = 'ON_LOGIN_SUBMIT';
export const FORGOTTEN_SUBMIT = 'FORGOTTEN_SUBMIT';

// quiz
export const CATEGORIES_QUIZZS = 'CATEGORIES_QUIZZS';
export const CURRENT_SLUG_CAT_QUIZZS = 'CURRENT_SLUG_CAT_QUIZZS';
export const QUIZZS_BY_ID = 'QUIZZS_BY_ID';

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
    case FORGOTTEN_SUBMIT:
      return {
        ...state
      };
    case CATEGORIES_QUIZZS:
      return {
        ...state,
        categoriesQuizzs: [...action.data]
      };
    case CURRENT_SLUG_CAT_QUIZZS:
      return {
        ...state,
        currrentSlugCatQuizzs: action.slug
      };
    case QUIZZS_BY_ID:
      return {
        ...state,
        quizzsByCategoryId: action.data
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

export const onLoginSubmit = () => ({
  type: ON_LOGIN_SUBMIT
});

export const forgottenSubmit = () => ({
  type: FORGOTTEN_SUBMIT
});

export const getAllCategoriesQuizzs = () => ({
  type: CATEGORIES_QUIZZS
});

export const currentSlugCatQuizzs = slug => ({
  type: CURRENT_SLUG_CAT_QUIZZS,
  slug
});

export const getQuizzsById = id => ({
  type: QUIZZS_BY_ID,
  id
});

export const dataForHomePage = () => ({
  type: DATA_HOME_PAGE
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
