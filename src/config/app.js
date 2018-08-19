// @flow

import { ENV } from './env';

export const isProduction: boolean = ENV === 'production';
export const isDebug: boolean = ENV === 'development';
export const isClient: boolean = typeof window !== 'undefined';

// TODO: Prod endpoint
export const apiEndpoint: string = isDebug ? 'http://localhost:3000' : 'http://localhost:3000';

// Replace with 'UA-########-#' or similar to enable tracking
export const trackingID: ?string = null;
