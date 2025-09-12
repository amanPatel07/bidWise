import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
// -------------------------------------------------------------------------------- //
import Master from "./core/components/Master";
import AuctionCard from "./modules/buyer/auctions/AuctionCard";
import BrowseAuction from "./modules/buyer/auctions/BrowseAuctions";

const BuyerDashboard = lazy(() => import("./modules/buyer/dashboard/Dashboard"));
const Buyer = lazy(() => import("./modules/buyer/Buyer"));

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