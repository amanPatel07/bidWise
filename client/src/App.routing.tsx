import { createBrowserRouter } from "react-router-dom";
import Master from "./core/components/Master";
import Home from "./modules/home/pages/Home";
import Profile from "./modules/user/pages/profile/Profile";
import BuyerDashboard from "./modules/buyer/dashboard/Dashboard";

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Master />,
        children: [
            {
                path: '',
                element: <BuyerDashboard/>
            },
            {
                path: 'dashboard',
                element: <Home />
            },
            {
                path: 'profile',
                element: <Profile />
            }
        ]
    }
]);

export default appRouter;