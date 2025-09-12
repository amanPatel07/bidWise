import { createApi, fetchBaseQuery, type BaseQueryFn } from "@reduxjs/toolkit/query/react";
import { environment } from "../../../environment/environment.dev";
import { notifications } from "@mantine/notifications";

const baseQuery = fetchBaseQuery({
    baseUrl: environment.BASE_URL
});

const baseApiIntercept: BaseQueryFn = async (
    args, api, extraOptions
) => {
    const result = await baseQuery(args, api, extraOptions);
    console.log(result)
    if ((result.data as any).data) {
        notifications.show({
            title: 'Success',
            message: (result.data as any).message,
            color: 'green',
            autoClose: 3,
            withCloseButton: true
        })
    } else {
        notifications.show({
            title: 'Error',
            message: (result.data as any).message,
            color: 'red',
            autoClose: 3,
            withCloseButton: true
        })
    }
    return result;
}

const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: baseApiIntercept,
    endpoints: () => ({}),
    tagTypes: ['AUCTION']
});

export default baseApi;