import { createBrowserRouter } from "react-router-dom";
import Master from "./core/components/Master";
import Home from "./modules/home/pages/Home";
import Profile from "./modules/user/pages/profile/Profile";

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Master />,
        children: [
            {
                path: '',
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