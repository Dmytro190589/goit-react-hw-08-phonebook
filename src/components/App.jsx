import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router';
import { Routes } from 'react-router-dom';
import authOperations from 'redux/auth/operations';
import { selectedIsCurrent } from 'redux/auth/selectors';
import Layout from './Layout/Layout';
import Contacts from './Pages/Contacts/Contacts';
import { PulseLoader } from 'react-spinners';
import Home from './Pages/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import Registration from './Pages/Registration/Registration';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

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
  return (
    <>
      {isCurrentFetching ? (
        <PulseLoader color="#9789c1" cssOverride={override} />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="register"
              element={
                // <PublicRoute>
                  <Registration />
                // </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                // <PrivateRoute>
                  <Contacts />
                // </PrivateRoute>
              }
            />
            <Route
              path="login"
              element={
                // <PublicRoute>
                  <LogIn />
                // </PublicRoute>
              }
            />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      )}
    </>
  );
}
