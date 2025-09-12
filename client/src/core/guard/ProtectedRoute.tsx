import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

interface ProtectedRouteProps {
    allowedRoles?: string[];
}

const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
    const user = useSelector((state: any) => state.user.user);

    const { role } = user ? user : null;

    console.log(user);

    if (allowedRoles && allowedRoles.includes(role)) {
        return <Outlet />;
    }

    return <></>;
};

export default ProtectedRoute;
