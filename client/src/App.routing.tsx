import { createBrowserRouter } from 'react-router-dom';
// -------------------------------------------------------------------------------- //
import Master from './core/components/Master';
import BuyerRoutes from './modules/buyer/Buyer.routing';

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Master />,
        children: [
            BuyerRoutes
        ],
    },
]);

export default appRouter;
