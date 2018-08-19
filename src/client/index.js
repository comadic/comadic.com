// @flow

/* eslint-disable no-underscore-dangle */

import React from 'react';
import { Provider } from 'react-redux';
import { hydrate } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import createRoutes from './routes';
import configureStore from './store';
import fetchDataForRoute from './utils/fetchDataForRoute';

// Grab the state from a global injected into
// server-generated HTML
const initialState = window.__INITIAL_STATE__;
const store = configureStore(initialState, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);
const routes = createRoutes(store);

/**
 * Callback function handling frontend route changes.
 * This function is bound to the Router's context
 */
function onUpdate() {
  // Prevent duplicate fetches when first loaded.
  // Explanation: On server-side render, we already have __INITIAL_STATE__
  // So when the client side onUpdate kicks in, we do not need to fetch twice.
  // We set it to null so that every subsequent client-side navigation will
  // still trigger a fetch data.
  // Read more: https://github.com/choonkending/react-webpack-node/pull/203#discussion_r60839356
  if (window.__INITIAL_STATE__ !== null) {
    window.__INITIAL_STATE__ = null;
    return;
  }

  console.log('CLIENT ON ROUTE UPDATE; props = ', this.state);

  store.dispatch({ type: 'CREATE_REQUEST' });
  fetchDataForRoute(this.state)
    .then((data: *) => {
      store.dispatch({ type: 'REQUEST_SUCCESS', payload: data });
    })
    .catch((e: Error) => {
      console.error(e);
      store.dispatch({ type: 'REQUEST_ERROR', payload: { error: e } });
    });
}

// Router converts <Route> element hierarchy to a route config:
// Read more https://github.com/rackt/react-router/blob/latest/docs/Glossary.md#routeconfig
hydrate(
  <Provider store={store}>
    <Router history={history} onUpdate={onUpdate}>
      {routes}
    </Router>
  </Provider>,
  // $FlowFixMe
  document.getElementById('app'),
);
