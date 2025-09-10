import baseApi from "../../../../../core/utility/service/apiSlice";

const bidService = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        placeBid: builder.mutation({
            query: ({ auctionId, amount, userId }) => ({
                url: `bid/${auctionId}`,
                method: 'POST',
                body: {
                    amount,
                    userId
                }
            }),
            invalidatesTags: () => [
                'AUCTION'
            ]
        })
    })
});

export const {
    usePlaceBidMutation
} = bidService;