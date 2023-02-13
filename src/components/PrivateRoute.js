import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectedIsCurrent, selectedIsLoggedIn } from 'redux/auth/selectors';

export default function PrivateRoute({
  component: Component,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(selectedIsLoggedIn);
  const isFetchingCurrentUser = useSelector(selectedIsCurrent);
  const shouldRedirect = !isLoggedIn && !isFetchingCurrentUser;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}