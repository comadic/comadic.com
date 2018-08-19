// @flow

type IndexData = {};

const fetchData = (): Promise<IndexData> => {
  // return Promise.all([destinationsData, trainsData]).then(
  //   ([destinations, trains]: [DestinationsData, TrainsData]) => ({ ...destinations, ...trains }),
  // );
  return Promise.resolve();
};

export default fetchData;
