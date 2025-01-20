import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/countdownSlice';

export const store = configureStore({
  reducer: {
    countdown: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;