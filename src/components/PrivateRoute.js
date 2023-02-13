import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectedIsCurrent, selectedIsLoggedIn } from "redux/auth/selectors";
const PrivateRoute = ({ component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectedIsLoggedIn);
    const isRefreshing = useSelector(selectedIsCurrent);
    const shouldRedirect = !isLoggedIn && !isRefreshing;
    return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};
export default PrivateRoute;