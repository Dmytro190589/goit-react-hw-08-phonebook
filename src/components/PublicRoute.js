import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectedIsLoggedIn } from 'redux/auth/selectors';
const PublicRoute = ({ component, redirectTo = '/', restricted = 'false' }) => {
    const isLoggedIn = useSelector(selectedIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
    return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};
export default PublicRoute;