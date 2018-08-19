// @flow

import { destinations, trainLocations } from '../../../data';

const destinationRoutes = destinations.reduce((acc: string[], destination: string) => {
  acc.push(`/destinations/${destination}`);
  return acc;
}, []);

const trainRoutes = trainLocations.reduce((acc: string[], from: string) => {
  const routesFrom = trainLocations.reduce((_acc: string[], to: string) => {
    if (from === to) {
      return _acc;
    }

    _acc.push(`/trains/${from}/${to}`);
    return _acc;
  }, []);

  return [...acc, ...routesFrom];
}, []);

const whitelist = {
  destinations: [...destinationRoutes],
  trains: [...trainRoutes],
};

export function whitelisted(url: string): boolean {
  const path = url.toLowerCase();
  const pathParts = path.split('/').reduce((acc, p) => (p.length ? [...acc, p] : acc), []);
  const isMultipath = pathParts.length > 1;
  console.log('WHITELIST; isMultipath = ', isMultipath, path, pathParts);
  if (!isMultipath) {
    return true;
  }

  const routeRoot = pathParts[0];
  const isRouteListed = Object.keys(whitelist).some(route => route === routeRoot);
  console.log('WHITELIST; isRouteListed = ', isRouteListed, routeRoot, Object.keys(whitelist));
  if (!isRouteListed) {
    return true;
  }

  const routes = whitelist[routeRoot];
  const isWhitelisted = routes.some(route => path.startsWith(route));
  console.log('WHITELIST; isWhitelisted = ', isWhitelisted, path, routes);
  return isWhitelisted;
}
