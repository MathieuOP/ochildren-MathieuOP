import datas from 'src/datas';
/**
 * Initial State
 */
const initialState = {
  indexQuiz: 0,
  datas: [
    ...datas,
  ]
};

/**
 * Types
 */
const INCREMENT_INDEX_QUIZ = 'INCREMENT_INDEX_QUIZ';

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
})

/**
 * Export
 */
export default reducer;
