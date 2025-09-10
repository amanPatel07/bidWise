import { createBrowserRouter } from "react-router-dom";
import Master from "./core/components/Master";
import AuctionCard from "./modules/buyer/auctions/AuctionCard";
import BrowseAuction from "./modules/buyer/auctions/BrowseAuctions";
import Buyer from "./modules/buyer/Buyer";
import BuyerDashboard from "./modules/buyer/dashboard/Dashboard";

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Master />,
        children: [
            {
                path: '',
                element: <Buyer />,
                children: [
                    {
                        path: '',
                        element: <BuyerDashboard />
                    },
                    {
                        path: 'auctions',
                        element: <BrowseAuction />,
                        children: [
                            {
                                path: '',
                                element: <AuctionCard />
                            }
                        ]
                    }
                ]
            }
        ]
    }
]);

export default appRouter;