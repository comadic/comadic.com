// @flow

import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
// import user from '../reducers/user';
// import topic from '../reducers/topic';
// import message from '../reducers/message';
// import * as types from '../types';

const initialState = {
  isFetching: false,
};

const data = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_REQUEST':
      return { ...state, isFetching: true };
    case 'REQUEST_SUCCESS':
      return { isFetching: false, ...action.payload };
    case 'REQUEST_FAILURE':
      return { ...state, isFetching: false };
    default:
      return state;
  }
};

// Combine reducers with routeReducer which keeps track of
// router state
const reducers = {
  data,
  //   topic,
  //   user,
  //   message,
  routing,
};

// ExtractReturnType extracts the return value from a reducer so it can be used
// as the value in a { name: value } object. It is needed for building the root
// state.
type ExtractReturnType = <T>(() => T) => T;

// State is a representation of the root state, based on the reducers.
// See https://flow.org/en/docs/types/utilities/#toc-objmap for more.
export type State = $ObjMap<typeof reducers, ExtractReturnType>;

export default combineReducers(reducers);
