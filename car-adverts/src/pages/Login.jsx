import React, { useState, useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../components/Form/Form';
import { StyledLogin } from './Login.styled';
import axios from 'axios';
import { UserContext } from '../App';

const Login = () => {
  // Hooks
  // -- state
  // --- local
  // ---- login form
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  // ---- register form
  const [registerName, setRegisterName] = useState('');
  const [registerSurname, setRegisterSurname] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');
  const [registerMessage, setRegisterMessage] = useState('');

  // --- global
  const { dispatch } = useContext(UserContext);

  // redirect
  const history = useHistory();

  // ref
  const inputRef = useRef();
  const registerRef = useRef();
  const registerEmailRef = useRef();

  // Custom functions
  const loginUser = async (e) => {
    e.preventDefault();

    const user = {
      email: loginEmail,
      password: loginPassword,
    };

    try {
      const response = await axios.post(
        'https://refactored-autoplus.herokuapp.com/signin/',
        {
          ...user,
        }
      );

      localStorage.setItem('user', response.data.user);
      dispatch({ type: 'login', payload: localStorage.getItem('user') });
      history.push('/autoplus-react/myaccount');
    } catch (err) {
      setLoginEmail('');
      setLoginPassword('');
      setLoginMessage(err.response.data.message);

      inputRef.current.focus();

      document
        .getElementById('signin-message')
        .classList.add('form-message', 'form-message-danger');
    }
  };

  const registerUser = async (e) => {
    e.preventDefault();
    if (registerPassword !== registerConfirmPassword) {
      setRegisterMessage('Passwords do not match');

      setRegisterPassword('');
      setRegisterConfirmPassword('');

      registerRef.current.focus();
      return;
    }

    const user = {
      name: registerName,
      surname: registerSurname,
      email: registerEmail,
      password: registerPassword,
    };

    try {
      const response = await axios.post(
        'https://refactored-autoplus.herokuapp.com/signup/',
        {
          ...user,
        }
      );
      if (response.data.status === 'fail') {
        setRegisterMessage(response.data.message);

        registerRef.current.focus();
      }

      if (response.data.status === 'success') {
        dispatch({ type: 'register', payload: response.data.user.id });
        localStorage.setItem('user', response.data.user.id);
        history.push('/autoplus-react/myaccount');
      }
    } catch (error) {
      setRegisterMessage(error.data.message);

      setRegisterEmail('');
      setRegisterPassword('');
      setRegisterConfirmPassword('');

      registerEmailRef.current.focus();
    }
  };

  // -- side effects

  return (
    <StyledLogin>
      <div className='container'>
        <section>
          <h1 className='text-center headline'>Sign up/ Sign in</h1>
        </section>

        <div className='forms-container'>
          <section id='signin' className='card-shadow'>
            <h2>
              <span>Have an account?</span> Sign in!
            </h2>
            <Form className='form' id='signin-form' onSubmit={loginUser}>
              <div className='form-control'>
                <label className='form-label' htmlFor='loginEmail'>
                  Email
                </label>
                <input
                  className='form-input'
                  type='email'
                  name='loginEmail'
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                  ref={inputRef}
                />
              </div>

              <div className='form-control'>
                <label className='form-label' htmlFor='loginPass'>
                  Password
                </label>
                <input
                  className='form-input'
                  type='password'
                  name='loginPass'
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                />
              </div>

              <div className='form-control'>
                <input
                  type='submit'
                  value='Sign in'
                  className='btn-primary btn-primary-submit'
                />
              </div>
            </Form>
            <p id='signin-message'>{loginMessage}</p>
          </section>
          <section id='signup' className='card-shadow'>
            <h2>
              <span>New user?</span> Sign up!
            </h2>
            <Form className='form' id='signup-form' onSubmit={registerUser}>
              <div className='form-control'>
                <label className='form-label' htmlFor='registerName'>
                  Name
                </label>
                <input
                  className='form-input'
                  type='text'
                  name='registerName'
                  required
                  value={registerName}
                  onChange={(e) => setRegisterName(e.target.value)}
                />
              </div>

              <div className='form-control'>
                <label className='form-label' htmlFor='registerSurname'>
                  Surname
                </label>
                <input
                  className='form-input'
                  type='text'
                  name='registerSurname'
                  required
                  value={registerSurname}
                  onChange={(e) => setRegisterSurname(e.target.value)}
                />
              </div>

              <div className='form-control'>
                <label className='form-label' htmlFor='registerEmail'>
                  Email
                </label>
                <input
                  className='form-input'
                  type='email'
                  name='registerEmail'
                  required
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  ref={registerEmailRef}
                />
              </div>

              <div className='form-control'>
                <label className='form-label' htmlFor='registerPass'>
                  Password
                </label>
                <input
                  className='form-input'
                  type='password'
                  name='registerPass'
                  required
                  value={registerPassword}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                  ref={registerRef}
                />
              </div>

              <div className='form-control'>
                <label className='form-label' htmlFor='registerConfirmPass'>
                  Confirm password
                </label>
                <input
                  className='form-input'
                  type='password'
                  name='registerConfirmPass'
                  required
                  value={registerConfirmPassword}
                  onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                />
              </div>

              <div className='form-control'>
                <input
                  type='submit'
                  value='Sign up'
                  className='btn-primary-submit btn-primary'
                />
              </div>
            </Form>
            <p id='signup-message'>{registerMessage}</p>
          </section>
        </div>
      </div>
    </StyledLogin>
  );
};

export default Login;
