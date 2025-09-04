import TableSkeleton from "../../../components/TableSkeleton";
import { useGetActiveAuctionsQuery } from "./utility/slices/auction.service";

const BuyerDashboard = () => {

    const { data: auctionList, isLoading } = useGetActiveAuctionsQuery();

    if (isLoading) {
        return <TableSkeleton />
    }

    return (
        <>
            {auctionList?.length ? (
                <div>
                    {auctionList.map((auction: any) => (
                        <p key={auction.id}>{auction.title}</p>
                    ))}
                </div>
            ) : (
                <p>No active auctions</p>
            )}
        </>
    );
}

export default BuyerDashboard;