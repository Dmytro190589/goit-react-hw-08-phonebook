import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import authOperations from 'redux/auth/operations';
import { selectedIsCurrent } from 'redux/auth/selectors';
import Layout from './Layout/Layout';
import { PulseLoader } from 'react-spinners';
import Home from '../Pages/Home/Home';
import LogIn from '../Pages/LogIn/LogIn';
import Registration from '../Pages/Registration/Registration';
import PrivateRoute from './PrivateRoute';
import Contacts from 'Pages/Contacts/Contacts';
import PublicRoute from './PublicRoute';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.current());
  }, [dispatch]);

  const override = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
  };
  const isCurrentFetching = useSelector(selectedIsCurrent);
  return isCurrentFetching ? (
    <PulseLoader color="#9789c1" cssOverride={override} />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              <PublicRoute
                redirectTo="/contacts"
                component={<Registration />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/contacts" component={<LogIn />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
