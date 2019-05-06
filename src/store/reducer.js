/**
 * Initial State
 */
const initialState = {
  menuBurgerIsActive: false,
};

/**
 * Types
 */
const NAVBAR_IS_ACTIVE = 'NAVBAR_IS_ACTIVE';

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case NAVBAR_IS_ACTIVE:
      return {
        ...state,
        menuBurgerIsActive: !state.menuBurgerIsActive,
      };

    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const handleClickMenuBurger = () => ({
  type: NAVBAR_IS_ACTIVE,
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
