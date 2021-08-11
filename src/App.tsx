import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Authentication from './Pages/Login';
// import Contest from './components/contestTop';
import NavBarItem from './Layout/NavbarItem';
import TopPage from './Pages/TopPage';
import Contest from './Pages/Contest';
import { userActions } from './Stores/UserReducer';
import AllResult from './Pages/AllResult';
import PersonalResult from './Pages/PersonalResult';

const App = () => {
  // const dispatch = useDispatch();
  // const { setUsername } = userActions;
  // const username = useSelector((state: any) => state.user.username);
  // const localUsername = localStorage.username;
  // console.log(localUsername);
  // if (username === '' && localUsername) {
  //   dispatch(setUsername(localUsername));
  // }

  return (
    <div>
      <BrowserRouter>
        {/* {username ? <NavBarItem /> : <div></div>} */}
        <NavBarItem />
        <Switch>
          <Route exact path="/">
            {/* {localUsername ? <div /> : <Redirect to="/login" />} */}
            <TopPage />
          </Route>
          <Route path="/login">
            <Authentication />
          </Route>
          <Route path="/contest/:type">
            <Contest />
          </Route>
          <Route path="/result/all">
            <AllResult />
          </Route>
          <Route path="/result/personal">
            <PersonalResult />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
