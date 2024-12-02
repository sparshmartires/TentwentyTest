import {QueryActionArg, QueryActionPayload} from '@api';
import type {Middleware} from '@reduxjs/toolkit';
import {isRejected, isRejectedWithValue} from '@reduxjs/toolkit';
import {
  BaseQueryApi,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

import config from '../../../config';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.themoviedb.org/3/',
  prepareHeaders: headers => {
    headers.set(
      'Authorization',
      config.movieApiToken,
    );
    headers.set('accept', 'application/json');
    return headers;
  },
  timeout: 15000,
});

const baseQueryWithInterceptor = async (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: object,
) => {
  const result = await baseQuery(args, api, extraOptions);
  return result;
};
/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger: Middleware = store => next => action => {
  // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
  if (isRejected(action) || isRejectedWithValue(action)) {
    const requestType = (action.meta.arg as QueryActionArg).type;
    if ((action?.payload as QueryActionPayload)?.originalStatus === 401) {
      api.util.resetApiState();
    } else if (requestType === 'mutation') {
      console.log('error');
    }
  }

  return next(action);
};

export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
  tagTypes: [],
});
