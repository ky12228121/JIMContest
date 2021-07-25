import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Authentication from './Components/Login';
// import Contest from './components/contestTop';
import NavBarItem from './Layout/NavbarItem';
// import TopPage from './components/topPage';
import { userActions } from './Stores/UserReducer';

const App = () => {
  const dispatch = useDispatch();
  const { setUsername } = userActions;
  const username = useSelector((state: any) => state.user.username);
  const localUsername = localStorage.username;
  console.log(localUsername);
  if (username === '' && localUsername) {
    dispatch(setUsername(localUsername));
  }

  return (
    <div>
      <BrowserRouter>
        {username ? <NavBarItem /> : <div></div>}
        <Switch>
          <Route exact path="/">
            {localUsername ? <div /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login">
            <Authentication />
          </Route>
          <Route path="/contest">{/* <Contest /> */}</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
