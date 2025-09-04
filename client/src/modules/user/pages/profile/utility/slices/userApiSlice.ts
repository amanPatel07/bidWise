import baseApi from '../../../../../../core/utility/service/apiSlice';

const userApiSlice = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUserById: builder.query({
            query: (id) => `/user/${id}`
        })
    })
});

export const {
    useGetUserByIdQuery
} = userApiSlice;