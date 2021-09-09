import { Auth } from 'aws-amplify';
import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userActions } from '../stores/UserReducer';
import { useChangeEvent } from '../utils/hooks';

const Authentication = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { setUsername } = userActions;
  const loginUsername = useChangeEvent('');
  const loginPassword = useChangeEvent('');
  const registerEmail = useChangeEvent('');
  const registerUsername = useChangeEvent('');
  const registerPassword = useChangeEvent('');
  const forgetUsername = useChangeEvent('');
  function login(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    Auth.signIn({
      username: loginUsername.value,
      password: loginPassword.value,
    })
      .then((data) => {
        localStorage.username = loginUsername.value;
        dispatch(setUsername(data.username));
        history.push('/');
      })
      .catch((error) => {
        console.log(`ログイン失敗\n${error}`);
        history.push('/');
      });
  }
  function signUp(e: MouseEvent<HTMLButtonElement>) {
    if (registerPassword.value.length < 8) {
      alert('パスワードは8文字以上入力してください。');
      registerUsername.setBySelf('');
      registerPassword.setBySelf('');
      return;
    } else if (!registerPassword.value.match(/[0-9]/g)) {
      alert('パスワードは数字を含める必要があります。');
      registerUsername.setBySelf('');
      registerPassword.setBySelf('');
      return;
    } else if (!registerPassword.value.match(/[A-Z]/g)) {
      alert('パスワードは英大文字を含める必要があります。');
      registerUsername.setBySelf('');
      registerPassword.setBySelf('');
      return;
    } else if (!registerPassword.value.match(/[a-z]/g)) {
      alert('パスワードは英小文字を含める必要があります。');
      registerUsername.setBySelf('');
      registerPassword.setBySelf('');
      return;
    }
    Auth.signUp({
      username: registerUsername.value,
      password: registerPassword.value,
      attributes: {
        email: registerEmail,
      },
    })
      .then(() => {
        alert('登録完了');
        window.location.reload();
      })
      .catch((error) => {
        switch (error.code) {
          case 'UsernameExistsException':
            alert(
              `そのUsernameは既に使われています。\n \nerror_code : ${error.code}\nerror_message : ${error.message}`
            );
            registerUsername.setBySelf('');
            registerPassword.setBySelf('');
            break;
          default:
            break;
        }
        console.log('サインアップ失敗', error);
      });
  }
  function forgetPassword() {
    Auth.forgotPassword()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }
  return (
    <>
      <div className="container">
        <div className="row my-5 py-5 bg-light">
          <div className="col-6 offset-3">
            <ul
              className="nav nav-tabs row text-center"
              id="nav-tabs"
              role="tablist"
            >
              <li className="nav-item col-6 px-0" role="presentation">
                <a
                  className="active nav-link"
                  id="login-tab"
                  data-toggle="tab"
                  role="tab"
                  type="button"
                  data-bs-toggle="tab"
                  data-bs-target="#login"
                >
                  サインイン
                </a>
              </li>
              <li className="nav-item col-6 px-0" role="presentation">
                <a
                  id="register-tab"
                  className="nav-link"
                  data-toggle="tab"
                  role="tab"
                  type="button"
                  data-bs-toggle="tab"
                  data-bs-target="#register"
                >
                  ユーザ登録
                </a>
              </li>
            </ul>
            <div className="tab-content mt-3">
              <div
                className="tab-pane fade show active"
                id="login"
                role="tabpanel"
              >
                <form>
                  <div className="form-group my-1">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={loginUsername.setByEvent}
                      value={loginUsername.value}
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-group my-2">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={loginPassword.setByEvent}
                      value={loginPassword.value}
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group row my-2">
                    <a className="text-end" href="#" onClick={() => {}}>
                      <small>パスワードを忘れた方はこちら</small>
                    </a>
                  </div>
                  <div className="form-group row my-2">
                    <div className="offset-4 col-4">
                      <button
                        className="btn btn-primary mt-3 form-control"
                        onClick={login}
                      >
                        サインイン
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="tab-pane fade" id="register" role="tabpanel">
                <form>
                  <div className="form-group my-2">
                    <label>E-mail</label>
                    <input
                      type="email"
                      className="form-control"
                      onChange={registerEmail.setByEvent}
                      value={registerEmail.value}
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="form-group my-2">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={registerUsername.setByEvent}
                      value={registerUsername.value}
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-group my-2">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={registerPassword.setByEvent}
                      value={registerPassword.value}
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group row my-1">
                    <div className="offset-4 col-4">
                      <button
                        className="btn btn-primary mt-3 form-control"
                        onClick={signUp}
                      >
                        登録
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authentication;
