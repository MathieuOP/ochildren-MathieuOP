/*
 * Npm import
 */
import { createStore, applyMiddleware, compose } from 'redux';

/*
 * Local import
 */
// Reducer
import reducer from 'src/store/reducer';
import ajaxMiddleware from './ajaxMiddleware';

const appliedMiddlewares = applyMiddleware(ajaxMiddleware);
/*
 * Code
 */
const devTools = [];
if (window.devToolsExtension) {
  devTools.push(window.devToolsExtension());
}

// createStore
const enhancers = compose(appliedMiddlewares, ...devTools);

const store = createStore(reducer, enhancers);

/*
 * Export
 */
export default store;
