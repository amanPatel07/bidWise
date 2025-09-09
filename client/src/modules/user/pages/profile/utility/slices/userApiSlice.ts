import type { IUser } from '@auction/shared';
import baseApi from '../../../../../../core/utility/service/apiSlice';

const userApiSlice = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserById: builder.query({
            query: (id) => `/user/${id}`,
            transformResponse: (response: { status: number; message: string; data: IUser }) => {
                return response.data;
            },
        }),
    })
});

export const {
    useGetUserByIdQuery
} = userApiSlice;