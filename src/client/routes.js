// @flow

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { fetchIndexData } from './fetch-data';

import Layout from './components/pages/Layout';
import IndexPage from './components/pages/IndexPage';
import AboutPage from './components/pages/AboutPage';
import ServicesPage from './components/pages/ServicesPage';
import JobsPage from './components/pages/JobsPage';
import NotFoundPage from './components/pages/Error404';

const routes = (store: *) => {
  const requireAuth = (nextState, replace, callback) => {
    const {
      user: { authenticated },
    } = store.getState();

    if (!authenticated) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname },
      });
    }
    callback();
  };

  // const redirectAuth = (nextState, replace, callback) => {
  //   const {
  //     user: { authenticated },
  //   } = store.getState();
  //   if (authenticated) {
  //     replace({
  //       pathname: '/',
  //     });
  //   }
  //   callback();
  // };

  return (
    <Route path="/" component={Layout}>
      <IndexRoute component={IndexPage} fetchData={fetchIndexData} />
      <Route path="about" component={AboutPage} />
      <Route path="services" component={ServicesPage} />
      <Route path="jobs" component={JobsPage} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  );
};

export default routes;
