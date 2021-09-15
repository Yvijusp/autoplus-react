import React, { useEffect } from 'react';
import { useHistory } from 'react-router';

// Pages
import MyAccount from './pages/MyAccount';

const ProtectedRoute = () => {
  // Hooks

  // redirects
  const history = useHistory();

  // -- side effects
  useEffect(() => {
    if (!localStorage.getItem('user'))
      // User logged in
      // return dispatch({ type: 'login', payload: localStorage.getItem('user') });

      // No user in localstorage redirecting to login page
      return history.push('/login');
  }, []);

  return <MyAccount />;
};

export default ProtectedRoute;
