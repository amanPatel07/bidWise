import type { Auction } from "@auction/shared";
import baseApi from "../../../../../core/utility/service/apiSlice";

const auctionSlice = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getActiveAuctions: builder.query({
            query: (_: void) => `auction`,
            transformResponse: (response: { status: number; message: string; data: Auction[] }) => {
                return response.data;
            },
        })
    }),
    overrideExisting: false,
});

export const {
    useGetActiveAuctionsQuery
} = auctionSlice;