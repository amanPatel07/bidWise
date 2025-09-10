import type { IAuction } from "@auction/shared";
import baseApi from "../../../../../core/utility/service/apiSlice";

const auctionSlice = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getActiveAuctions: builder.query({
            query: (status: string | void) => `auction?status=${status}`,
            transformResponse: (response: { status: number; message: string; data: IAuction[] }) => {
                return response.data;
            },
            providesTags: ["AUCTION"]
        }),
        getAuctionById: builder.query({
            query: (id: string) => `auction/${id}`,
            transformResponse: (response: { status: number; message: string; data: IAuction }) => {
                return response.data;
            },
        })
    }),
    overrideExisting: false,
});

export const {
    useGetActiveAuctionsQuery,
    useGetAuctionByIdQuery
} = auctionSlice;