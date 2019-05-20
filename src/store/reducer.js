import memory from 'src/datas';
import shuffle from 'shuffle-array';

/**
 * Initial State
 */
const initialState = {
  dataHomePage: [],
  puzzles: [],
  dataMemory: [
    ...JSON.parse(JSON.stringify(memory)),
  ],
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
  dataHomeGame: {},
  categoriesQuizzs: [],
  currentSlugCatAge: '',
  currrentSlugCatQuizzs: '',
  quizzsByWorldId: [],
  idCatAge: '',
  questionsOfQuiz: [],
  loaded: false,
  disabledButton: true,
  message: '',
  score: 0,
  myScore: false,
  answerTrue: false,
  error404: false,
  getCountPaire: 0,
  getCountClick: 0,
  getTentative: 0,
  finished: false,
  openedCard: [],
};

/**
 * Types
 */
export const DATA_HOME_PAGE = 'DATA_HOME_PAGE';
export const DATA_HOME_GAME = 'DATA_HOME_GAME';

// form
export const HANDLE_LOGIN_CHANGE = 'HANDLE_LOGIN_CHANGE';
export const ON_LOGIN_SUBMIT = 'ON_LOGIN_SUBMIT';
export const FORGOTTEN_SUBMIT = 'FORGOTTEN_SUBMIT';

// quiz
const INCREMENT_INDEX_QUIZ = 'INCREMENT_INDEX_QUIZ';
export const CATEGORIES_QUIZZS = 'CATEGORIES_QUIZZS';
const CURRENT_SLUG_CAT_AGE = 'CURRENT_SLUG_CAT_AGE';
const CURRENT_SLUG_CAT_QUIZZS = 'CURRENT_SLUG_CAT_QUIZZS';
export const QUESTION_BY_ID = 'QUESTION_BY_ID';
const RECEIVED_DATA_QUESTIONS = 'RECEIVED_DATA_QUESTIONS';
const CHOSEN_ANSWER = 'CHOSEN_ANSWER';
const UPDATE_SCORE = 'UPDATE_SCORE';
const GET_MESSAGE = 'GET_MESSAGE';
const MY_SCORE = 'MY_SCORE';
const INITIAL_QUIZ = 'INITIAL_QUIZ';
const ANSWER_IS_TRUE = 'ANSWER_IS_TRUE';
export const QUIZ_BY_WORLD_ID = 'QUIZ_BY_WORLD_ID';
export const ERROR_404 = 'ERROR_404';
export const DATA_FOR_PUZZLES = 'DATA_FOR_PUZZLES';
//memory
const COUNT_PAIRS = 'COUNT_PAIRS';
const FINISHED = 'FINISHED';
const TENTATIVE = 'TENTATIVE';
const INCREMENTE_COUNT_CLICK = 'INCREMENTE_COUNT_CLICK';
const RESET_COUNT_CLICK = 'RESET_COUNT_CLICK';
const UPDATED_DATA = 'UPDATED_DATA';
const UPDATED_OPENED_CARD = 'UPDATED_OPENED_CARD';
const RESET_MEMORY = 'RESET_MEMORY';

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
        dataHomePage: [...action.data],
        error404: false,
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
    case INCREMENT_INDEX_QUIZ:
      return {
        ...state,
        indexQuiz: state.indexQuiz + 1,
        disabledButton: true,
        message: '',
        answerTrue: false
      };
    case DATA_HOME_GAME:
      return {
        ...state,
        dataHomeGame: {...action.data},
        error404: false,
      };
    case CATEGORIES_QUIZZS:
      return {
        ...state,
        categoriesQuizzs: [...action.data],
        error404: false,
      };
    case CURRENT_SLUG_CAT_AGE:
      return {
        ...state,
        currentSlugCatAge: action.category,
        idCatAge: action.id
      };
    case CURRENT_SLUG_CAT_QUIZZS:
      return {
        ...state,
        currrentSlugCatQuizzs: action.slug
      };
    case QUIZ_BY_WORLD_ID:
      return {
        ...state,
        quizzsByWorldId: action.data,
        error404: false,
      };
    case QUESTION_BY_ID:
      return {
        ...state,
        loaded: false,
      };
    case RECEIVED_DATA_QUESTIONS:
      return {
        ...state,
        loaded: true,
        questionsOfQuiz: [
          ...action.data,
        ],
        error404: false,
      };
    case CHOSEN_ANSWER:
      return {
        ...state,
        disabledButton: false
      };
    case UPDATE_SCORE:
      return {
        ...state,
        score: state.score + 1
      };
    case GET_MESSAGE:
      return {
        ...state,
        message: action.message
      };
    case MY_SCORE:
      return {
        ...state,
        myScore: true
      };
    case INITIAL_QUIZ:
      return {
        ...state,
        indexQuiz: 0,
        message: '',
        myScore: false,
        score: 0,
        disabledButton: true,
        answerTrue: false
      };
    case ANSWER_IS_TRUE:
      return {
        ...state,
        answerTrue: true
      };
    case ERROR_404:
      return {
        ...state,
        error404: true,
      }
    case DATA_FOR_PUZZLES:
      return {
        ...state,
        puzzles: [
          ...action.data
        ],
      }
    case COUNT_PAIRS:
      return {
        ...state,
        getCountPaire: state.getCountPaire += 1,
      };
    case TENTATIVE:
      return {
        ...state,
        getTentative: state.getTentative += 1,
      };
    case FINISHED:
      return {
        ...state,
        finished: true,
      };
    case INCREMENTE_COUNT_CLICK:
      return {
        ...state,
        getCountClick: state.getCountClick +=1,
      }
    case RESET_COUNT_CLICK:
      return {
        ...state,
        getCountClick: 0,
      };
    case UPDATED_DATA:
    // console.log(action.data);
      return {
        ...state,
        dataMemory: action.data,
      };
    case UPDATED_OPENED_CARD:
      return {
        ...state,
        openedCard: state.openedCard.length === 2 ? action.data : [...state.openedCard, action.data],
      }
    case RESET_MEMORY:
      memory.map((data) => shuffle(data.memory));
      return {
        ...state,
        dataMemory: [
          ...JSON.parse(JSON.stringify(memory)),
        ],
        openedCard: [],
        getCountPaire: 0,
        getCountClick: 0,
        getTentative: 0,
        finished: false,
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

export const dataForHomePage = () => ({
  type: DATA_HOME_PAGE
});

export const dataForHomeGame = categoryId => ({
  type: DATA_HOME_GAME,
  categoryId
});

export const getQuizByWorldId = worldId => ({
  type: QUIZ_BY_WORLD_ID,
  worldId,
})

export const getQuestionsByQuizId = id => ({
  type: QUESTION_BY_ID,
  id,
});

export const getMyScore = () => ({
  type: MY_SCORE
});

export const userChosenAnswer = () => ({
  type: CHOSEN_ANSWER
});

export const updateScore = () => ({
  type: UPDATE_SCORE
});

export const getMessage = message => ({
  type: GET_MESSAGE,
  message
});

export const messageScore = state => {
  const { score } = state;
  return score < 5 ? 'bad' : 'good';
};

export const answerIsTrue = () => ({
  type: ANSWER_IS_TRUE
});

export const handleClickButtonNext = () => ({
  type: INCREMENT_INDEX_QUIZ
});

export const initialQuiz = () => ({
  type: INITIAL_QUIZ
});

export const receivedDataQuestions = data => ({
  type: RECEIVED_DATA_QUESTIONS,
  data
});

export const infosCatAge = (category, id) => ({
  type: CURRENT_SLUG_CAT_AGE,
  category,
  id
});

export const getPage404 = () => ({
  type: ERROR_404,
});

export const dataForPuzzles = (worldId) => ({
  type: DATA_FOR_PUZZLES,
  worldId,
})

export const countPairs = () => ({
  type: COUNT_PAIRS,
});

export const memoryFinished = () => ({
  type: FINISHED,
});

export const tentative = () => ({
  type: TENTATIVE,
});

export const incrementeCountClick = () => ({
  type: INCREMENTE_COUNT_CLICK,
});

export const resetCountClick = () => ({
  type: RESET_COUNT_CLICK,
});

export const updatedData = data => ({
  type: UPDATED_DATA,
  data,
});

export const updatedOpenedCard = data => ({
  type: UPDATED_OPENED_CARD,
  data,
});

export const resetMemory = () => ({
  type: RESET_MEMORY,
});
/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
