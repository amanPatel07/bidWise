import { createBrowserRouter } from "react-router-dom";
import Master from "./core/components/Master";
import BuyerDashboard from "./modules/buyer/dashboard/Dashboard";

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Master />,
        children: [
            {
                path: '',
                element: <BuyerDashboard />
            }
        ]
    }
]);

export default appRouter;