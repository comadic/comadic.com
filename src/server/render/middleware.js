// @flow

import { createMemoryHistory, match } from 'react-router';
import axios from 'axios';
import type { $Request, $Response } from 'express';

import { sessionId } from '../../config/secrets';
import createRoutes from '../../client/routes';
import configureStore from '../../client/store';
import fetchDataForRoute from '../../client/utils/fetchDataForRoute';
import pageRenderer from './pageRenderer';
import { whitelisted } from './whitelist';

/*
 * Export render function to be used in server/config/routes.js
 * We grab the state passed in from the server and the req object from Express/Koa
 * and pass it into the Router.run function.
 */
export default function render(req: $Request, res: $Response) {
  // const authenticated = req.isAuthenticated();
  const history = createMemoryHistory();
  const store = configureStore(
    // {
    //   user: {
    //     authenticated,
    //     isWaiting: false,
    //     message: '',
    //     isLogin: true,
    //   },
    // },
    history,
  );

  const routes = createRoutes(store);

  /*
   * From the react-router docs:
   *
   * This function is to be used for server-side rendering. It matches a set of routes to
   * a location, without rendering, and calls a callback(err, redirect, props)
   * when it's done.
   *
   * The function will create a `history` for you, passing additional `options` to create it.
   * These options can include `basename` to control the base name for URLs, as well as the pair
   * of `parseQueryString` and `stringifyQuery` to control query string parsing and serializing.
   * You can also pass in an already instantiated `history` object, which can be constructed
   * however you like.
   *
   * The three arguments to the callback function you pass to `match` are:
   * - err:       A javascript Error object if an error occurred, `undefined` otherwise.
   * - redirect:  A `Location` object if the route is a redirect, `undefined` otherwise
   * - props:     The props you should pass to the routing context if the route matched,
   *              `undefined` otherwise.
   * If all three parameters are `undefined`, this means that there was no route found matching the
   * given location.
   */
  match({ routes, location: req.url }, (err, redirect, props) => {
    /* Give the user's session to the server to use */
    if (req.cookies[sessionId]) {
      axios.defaults.headers.common.Cookie = `${sessionId}=${req.cookies[sessionId]}`;
    }

    if (err) {
      res.status(500).json(err);
      return;
    }

    if (redirect) {
      res.redirect(302, redirect.pathname + redirect.search);
      return;
    }

    // if (!whitelisted(req.url)) {
    //   const html = pageRenderer(store, props);
    //   res.status(404).send(html);
    //   return;
    // }

    if (props) {
      // This method waits for all render component
      // promises to resolve before returning to browser
      store.dispatch({ type: 'CREATE_REQUEST' });
      fetchDataForRoute(props)
        .then((data: *) => {
          store.dispatch({ type: 'REQUEST_SUCCESS', payload: data });
          const html = pageRenderer(store, props);
          res.status(200).send(html);
        })
        .catch((e: Error) => {
          console.error(e);
          store.dispatch({ type: 'REQUEST_ERROR', payload: { error: e } });
          res.status(500).json(e);
        });
      return;
    }

    res.sendStatus(404);
  });
}
