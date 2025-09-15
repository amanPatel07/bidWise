import { lazy } from "react";

const BuyerDashboard = lazy(() => import('./components/Dashboard'));
const Buyer = lazy(() => import('./Buyer'));
const BrowseAuction = lazy(() => import('./components/BrowseAuctions'));

const BuyerRoutes = {
    path: '',
    element: <Buyer />,
    children: [
        {
            path: 'home',
            element: <BuyerDashboard />,
        },
        {
            path: 'auctions',
            element: <BrowseAuction />
        },
    ],
}

export default BuyerRoutes;