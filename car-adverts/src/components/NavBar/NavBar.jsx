import React, { useContext, useEffect } from 'react';
// Router link
import { Link } from 'react-router-dom';
// Style
import { StyledHeader } from './NavBar.styled';
// Context
import { UserContext } from '../../App';
// Iconst
import { FaUserAlt } from 'react-icons/fa';

const NavBar = () => {
  // Hooks
  // -- state
  const { state, dispatch } = useContext(UserContext);

  // -- side effects
  useEffect(() => {
    if (localStorage.getItem('user'))
      return dispatch({ type: 'login', payload: localStorage.getItem('user') });
  }, [dispatch]);

  return (
    <StyledHeader>
      <div className='container'>
        <div>Car Adverts</div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            {state.user ? (
              <li>
                <Link to='/myaccount'>
                  My Account <FaUserAlt size='15' />
                </Link>
              </li>
            ) : (
              <li>
                <Link to='/login'>Sign In / Sign Up</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default NavBar;
