import { createBrowserRouter } from 'react-router-dom';
// -------------------------------------------------------------------------------- //
import Master from './core/components/Master';
import BuyerRoutes from './modules/buyer/Buyer.routing';
import { lazy } from 'react';

const Registration = lazy(() => import('./modules/registration/Registration'));

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Master />,
        children: [
            BuyerRoutes,
        ],
    },
    {
        path: 'registration',
        element: <Registration />
    }
]);

export default appRouter;
