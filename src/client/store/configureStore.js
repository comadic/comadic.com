// @flow

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';
import type { State } from './reducers';
import { isClient, isDebug } from '../../config/app';

/*
 * @param {Object} initial state to bootstrap our stores with for server-side rendering
 * @param {History Object} a history object. We use `createMemoryHistory` for server-side rendering,
 *                          while using browserHistory for client-side
 *                          rendering.
 */
export default function configureStore(initialState: State, history: *) {
  // Installs hooks that always keep react-router and redux store in sync
  const middleware = [thunk, routerMiddleware(history)];
  let store;

  if (isClient && isDebug) {
    store = createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(...middleware),
        typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
          ? window.devToolsExtension()
          : f => f,
      ),
    );
  } else {
    store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware), f => f));
  }

  // $FlowFixMe hot is missing in module, maybe need flow-typed
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    // module.hot.accept('reducers', () => {
    //   // eslint-disable-next-line global-require
    //   const nextReducer = require('./reducers');
    //   store.replaceReducer(nextReducer);
    // });
  }

  return store;
}
