import { configureStore } from '@reduxjs/toolkit';
import userSliceReducer from '../shared/slices/userSlice';
import baseApi from '../core/utility/service/apiSlice';

export const store = configureStore({
    reducer: {
        user: userSliceReducer,
        [baseApi.reducerPath]: baseApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(baseApi.middleware)
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;