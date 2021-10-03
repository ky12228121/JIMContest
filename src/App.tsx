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
import { userActions } from './stores/UserReducer';
import { API } from 'aws-amplify';
import { getByUsername } from './graphql/queries';
import { createUsers } from './graphql/mutations';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { CreateUsersMutation, GetByUsernameQuery } from './API';
import { ContestInfoActions } from './stores/ContestInfoReducer';
import { RootState } from './stores/Store';

const App = () => {
  const dispatch = useDispatch();
  const { setUser } = userActions;
  const localUsername = localStorage.username;

  async function getUser() {
    if (localUsername) {
      try {
        const user = (await API.graphql({
          query: getByUsername,
          variables: { username: localUsername },
        })) as GraphQLResult<GetByUsernameQuery>;
        if (typeof user === 'undefined') {
          return;
        }
        if (!user.data?.getByUsername?.items?.length) {
          const newUser = (await API.graphql({
            query: createUsers,
            variables: { input: { username: localUsername } },
          })) as GraphQLResult<CreateUsersMutation>;
          if (newUser.data?.createUsers) {
            const userData = newUser.data.createUsers;
            dispatch(setUser({ id: userData.id, username: userData.username }));
          }
        } else {
          const userData = user.data.getByUsername.items.pop();
          if (userData) {
            dispatch(setUser({ id: userData.id, username: userData.username }));
          }
        }
      } catch (e) {
        console.error(e);
      }
    }
  }

  useEffect(() => {
    getUser();
  }, [localUsername]);

  return (
    <div>
      <BrowserRouter>
        <Spinner>
          <div>
            {localUsername ? <NavBarItem /> : <Redirect to="/login" />}
            <Alert />
            <Switch>
              <Route exact path="/">
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
