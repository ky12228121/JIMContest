import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Alert from './layouts/Alert';
import NavBarItem from './layouts/NavbarItem';
import Spinner from './layouts/Spinner';
import AllResult from './pages/AllResult';
import Contest from './pages/Contest';
import ForgotPassword from './pages/ForgotPassword';
import Authentication from './pages/Login';
import PersonalResult from './pages/PersonalResult';
import Ranking from './pages/Ranking';
import TopPage from './pages/TopPage';
import { RootState } from './stores/Store';
import UserReducer, { userActions } from './stores/UserReducer';
import { API } from 'aws-amplify';
import { getByUsername } from './graphql/queries';
import { createUsers } from './graphql/mutations';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { GetByUsernameQuery } from './API';

const App = () => {
  const dispatch = useDispatch();
  const { setUsername } = userActions;
  const username = useSelector((state: RootState) => state.user.username);
  const localUsername = localStorage.username;
  if (username === '' && localUsername !== '') {
    dispatch(setUsername(localUsername));
  }
  async function getUser() {
    try {
      const user = (await API.graphql({
        query: getByUsername,
        variables: { username: localUsername },
      })) as GraphQLResult<GetByUsernameQuery>;
      if (typeof user === 'undefined') {
        return;
      }
      if (!user.data?.getByUsername?.items?.length) {
        await API.graphql({
          query: createUsers,
          variables: { username: localUsername },
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Spinner>
          <div>
            {localUsername ? <NavBarItem /> : <div />}
            <Alert />
            <Switch>
              <Route exact path="/">
                {localUsername ? <div /> : <Redirect to="/login" />}
                <TopPage />
              </Route>
              <Route path="/login">
                {!localUsername ? <Authentication /> : <Redirect to="/" />}
              </Route>
              <Route path="/forgot-password">
                <ForgotPassword />
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
          </div>
        </Spinner>
      </BrowserRouter>
    </div>
  );
};

export default App;
