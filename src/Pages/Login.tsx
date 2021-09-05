import { Auth } from 'aws-amplify';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { userActions } from '../stores/UserReducer';

const Authentication = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { setUsername } = userActions;
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const login = (e: any) => {
    e.preventDefault();
    Auth.signIn(loginUsername, loginPassword)
      .then((data) => {
        localStorage.username = data.username;
        dispatch(setUsername(data.username));
        history.push('/');
      })
      .catch((error) => {
        console.log(`ログイン失敗\n${error}`);
        history.push('/');
      });
  };
  const signUp = (e: any) => {
    e.preventDefault();
    if (registerPassword.length < 8) {
      alert('パスワードは8文字以上入力してください。');
      setRegisterUsername('');
      setRegisterPassword('');
      return;
    } else if (!registerPassword.match(/[0-9]/g)) {
      alert('パスワードは数字を含める必要があります。');
      setRegisterUsername('');
      setRegisterPassword('');
      return;
    }
    Auth.signUp({
      username: registerUsername,
      password: registerPassword,
      attributes: {
        email: registerEmail,
      },
    })
      .then(() => {
        alert('登録完了');
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.code);
        switch (error.code) {
          case 'UsernameExistsException':
            alert(
              `そのUsernameは既に使われています。\n \nerror_code : ${error.code}\nerror_message : ${error.message}`
            );
            setRegisterUsername('');
            setRegisterPassword('');
            break;
          default:
            break;
        }
        console.log('サインアップ失敗', error);
      });
  };
  const onChangeLoginUsername = (e: any) => {
    e.preventDefault();
    setLoginUsername(e.currentTarget.value);
  };
  const onChangeLoginPassword = (e: any) => {
    e.preventDefault();
    setLoginPassword(e.currentTarget.value);
  };
  const onChangeRegisterEmail = (e: any) => {
    e.preventDefault();
    setRegisterEmail(e.currentTarget.value);
  };
  const onChangeRegisterUsername = (e: any) => {
    e.preventDefault();
    setRegisterUsername(e.currentTarget.value);
  };
  const onChangeRegisterPassword = (e: any) => {
    e.preventDefault();
    setRegisterPassword(e.currentTarget.value);
  };
  return (
    <>
      <div className="container">
        <div className="row my-5 py-5 bg-light">
          <div className="col-6 offset-3">
            <div className="nav nav-tabs row text-center">
              <a
                className="col nav-link"
                id="login-form-link"
                data-toggle="tab"
                href="#nav-login"
              >
                Login
              </a>
              <a
                id="register-form-link"
                className="col active nav-link"
                data-toggle="tab"
                href="#nav-register"
              >
                Register
              </a>
            </div>
            <div className="tab-content mt-4">
              <div className="tab-pane fade" id="nav-login">
                <form>
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => onChangeLoginUsername(e)}
                      value={loginUsername}
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={(e) => onChangeLoginPassword(e)}
                      value={loginPassword}
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group row">
                    <div className="offset-4 col-4">
                      <button
                        className="btn btn-primary mt-3 form-control"
                        onClick={login}
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="tab-pane fade show active" id="nav-register">
                <form>
                  <div className="form-group">
                    <label>E-mail</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => onChangeRegisterEmail(e)}
                      value={registerEmail}
                      placeholder="E-mail"
                    />
                  </div>
                  <div className="form-group">
                    <label>Username</label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={(e) => onChangeRegisterUsername(e)}
                      value={registerUsername}
                      placeholder="Username"
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={(e) => onChangeRegisterPassword(e)}
                      value={registerPassword}
                      placeholder="Password"
                    />
                  </div>
                  <div className="form-group row">
                    <div className="offset-4 col-4">
                      <button
                        className="btn btn-primary mt-3 form-control"
                        onClick={signUp}
                      >
                        Register
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
