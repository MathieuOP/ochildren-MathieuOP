import { datas } from 'src/datas';
/**
 * Initial State
 */
const initialState = {
  indexQuiz: 0,
  datas,
  dataHomePage: [],
};

/**
 * Types
 */
const INCREMENT_INDEX_QUIZ = 'INCREMENT_INDEX_QUIZ';
export const DATA_HOME_PAGE = 'DATA_HOME_PAGE';

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INCREMENT_INDEX_QUIZ:
      return {
        ...state,
        indexQuiz: state.indexQuiz + 1,
      }
    case DATA_HOME_PAGE:
      return {
        ...state,
        dataHomePage: [
          ...action.data,
        ]
      }
    default:
      return state;
  }
};

/**
 * Action Creators
 */

/**
 * Selectors
 */

export const handleClickButtonNext = () => ({
  type: INCREMENT_INDEX_QUIZ,
});

export const dataForHomePage = () => ({
  type: DATA_HOME_PAGE,
})
 
/**
 * Export
 */
export default reducer;
