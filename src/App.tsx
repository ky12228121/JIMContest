import { useSelector, useDispatch } from 'react-redux';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
import Authentication from './pages/Login';
import NavBarItem from './layouts/NavbarItem';
import TopPage from './pages/TopPage';
import Contest from './pages/Contest';
import { userActions } from './stores/UserReducer';
import AllResult from './pages/AllResult';
import PersonalResult from './pages/PersonalResult';
import Ranking from './pages/Ranking';
const App = () => {
  const dispatch = useDispatch();
  const { setUsername } = userActions;
  const username = useSelector((state: any) => state.user.username);
  const localUsername = localStorage.username;
  if (username === '' && localUsername !== '') {
    dispatch(setUsername(localUsername));
  }
  return (
    <div>
      <BrowserRouter>
        {localUsername ? <NavBarItem /> : <div></div>}
        <Switch>
          <Route exact path="/">
            {localUsername ? <div /> : <Redirect to="/login" />}
            <TopPage />
          </Route>
          <Route path="/login">
            {!localUsername ? <Authentication /> : <Redirect to="/" />}
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
          <Route path="/result/ranking">
            <Ranking />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
