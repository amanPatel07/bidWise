import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "../../../environment/environment.dev";

const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: environment.BASE_URL
    }),
    endpoints: () => ({}),
    tagTypes: ['AUCTION']
});

export default baseApi;