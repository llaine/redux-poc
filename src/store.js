import { createStore, combineReducers, applyMiddleware } from 'redux'
import { syncHistory, routeReducer } from 'react-router-redux'
import { browserHistory } from 'react-router'

import ReducersCombined from './reducers/index';

/**
 * Simple configuration utilisant le react-router-redux package.
 * qui va permet de gérer les routes comme des simples actions.
 */
const reducer = combineReducers(Object.assign({}, ReducersCombined, {
  routing: routeReducer
}));

const reduxRouterMiddleware = syncHistory(browserHistory);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware)(createStore);

const store = createStoreWithMiddleware(reducer);

reduxRouterMiddleware.listenForReplays(store);

export default store;
