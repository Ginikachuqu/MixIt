// Essentials
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStatus } from '../../hooks/useAuthStatus';

// Components
import Loader from '../loader/Loader';

// interface IAppProps {
// }

const PrivateRoute: React.FunctionComponent<IAppProps> = () => {
    const {loggedIn, checkingStatus } = useAuthStatus()

    if (checkingStatus) {
        return <Loader />
    }

    return loggedIn ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
