// @flow

const defaultFetchData = (params?: Object): Promise<void> => {
  console.log(`defaultFetchData with params ${params ? JSON.stringify(params) : ''}... `);
  return Promise.resolve();
};

function fetchDataForRoute({ routes, params }) {
  const matchedRoute = routes[routes.length - 1];
  const fetchDataHandler = matchedRoute.fetchData || defaultFetchData;
  return fetchDataHandler(params);
}

export default fetchDataForRoute;
