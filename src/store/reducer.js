import { datas } from 'src/datas';
/**
 * Initial State
 */
const initialState = {
  datas,
  dataHomePage: []
};

/**
 * Types
 */
export const DATA_HOME_PAGE = 'DATA_HOME_PAGE';

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
export const dataForHomePage = () => ({
  type: DATA_HOME_PAGE
});

/**
 * Export
 */
export default reducer;
