import type { IUser } from '@auction/shared';
import baseApi from '../../../../../../core/utility/service/apiSlice';

const userApiSlice = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserById: builder.query({
            query: (id) => `/user/${id}`,
            transformResponse: (response: { status: number; message: string; data: IUser }) => {
                return {
                    ...response.data,
                    createdAt: response.data.createdAt ? new Date(response.data.createdAt).toISOString() : null,
                    updatedAt: response.data.updatedAt ? new Date(response.data.updatedAt).toISOString() : null,
                };
            },
        }),
    })
});

export const {
    useGetUserByIdQuery
} = userApiSlice;