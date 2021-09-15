import React, { useReducer } from 'react';
// Router
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// Pages
import Home from './pages/Home';

// Components
import NavBar from './components/NavBar/NavBar';
import { GlobalStyle } from './GlobalStyles';
import ProtectedRoute from './ProtectedRoute';
import Login from './pages/Login';

// Context
export const UserContext = React.createContext();

// State managment
// --global
const initialState = { user: '' };

const reducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return { user: action.payload };
    case 'logout':
      return { user: '' };
    case 'register':
      return { user: action.payload };
    default:
      return state;
  }
};

function App() {
  // Hooks
  // -- state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <GlobalStyle />
      <UserContext.Provider value={{ state, dispatch }}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/myaccount' component={ProtectedRoute} />
          </Switch>
        </Router>
      </UserContext.Provider>
    </>
  );
}

export default App;
