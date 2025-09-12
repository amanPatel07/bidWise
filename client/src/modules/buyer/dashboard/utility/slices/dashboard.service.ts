import baseApi from '../../../../../core/utility/service/apiSlice';

const dashboardApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getDashboardStats: builder.query({
            query: (id: string) => `user/dashboard/${id}`,
            transformResponse: (response: any) => {
                return response.data;
            },
        }),
    }),
});

export const { useGetDashboardStatsQuery } = dashboardApi;
