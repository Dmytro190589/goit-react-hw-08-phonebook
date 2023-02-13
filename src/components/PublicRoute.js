import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectedIsLoggedIn } from 'redux/auth/selectors';
const PublicRoute = ({ component, redirectTo = '/', restricted = 'false' }) => {
    const isLoggenIn = useSelector(selectedIsLoggedIn);
    const shouldRedirect = isLoggenIn && restricted;
    return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};
export default PublicRoute;