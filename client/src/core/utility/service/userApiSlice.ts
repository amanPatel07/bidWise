import type { IUser } from '@auction/shared';
import { toResponse } from '../adapter/user.adapter';
import baseApi from './apiSlice';

const userApiSlice = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserById: builder.query({
            query: (id) => `/user/${id}`,
            transformResponse: (response: { status: number; message: string; data: IUser }) => {
                return toResponse(response?.data);
            },
        }),
    }),
});

export const { useGetUserByIdQuery } = userApiSlice;
