import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { RootState } from './../store/store';

const baseUrl: string = 'https://frontend-test-api.aircall.io/';

const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).userData.access_token;
    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

export const callsApi = createApi({
  reducerPath: 'callsApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getCalls: builder.query({
      query: (path) => `${path}`,
    }),
  }),
});

export const { useGetCallsQuery } = callsApi;
