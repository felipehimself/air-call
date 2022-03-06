import { configureStore } from '@reduxjs/toolkit';
import setUserSlice from './../features/userSlice';
import { callsApi } from '../services/service';

const store = configureStore({
  reducer: {
    userData: setUserSlice,
    [callsApi.reducerPath]: callsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(callsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
