import { Auth } from '@aws-amplify/auth';
import { useState, MouseEvent } from 'react';
import { useHistory } from 'react-router';
import { useChangeEvent } from '../utils/hooks';

const ForgotPassword = () => {
  const history = useHistory();
  const forgetUsername = useChangeEvent('');
  const verifyCode = useChangeEvent('');
  const newPassword1 = useChangeEvent('');
  const newPassword2 = useChangeEvent('');
  const [sendCodeFlag, setSendCodeFlag] = useState(false);

  const beforeSendCode = (
    <div>
      <div className="form-group my-1">
        <label>Username</label>
        <input
          type="text"
          className="form-control"
          onChange={forgetUsername.setByEvent}
          value={forgetUsername.value}
          placeholder="Username"
        />
      </div>
      <div className="form-group row my-2">
        <div className="offset-4 col-4">
          <button
            className="btn btn-primary mt-3 form-control"
            onClick={sendConfirmationCode}
          >
            確認メール送信
          </button>
        </div>
      </div>
    </div>
  );
  const afterSendCode = (
    <div>
      <div className="form-group my-1">
        <label>確認コード</label>
        <input
          type="text"
          className="form-control"
          onChange={verifyCode.setByEvent}
          value={verifyCode.value}
          placeholder="verify code"
        />
      </div>
      <div className="form-group my-1">
        <label>新しいパスワード</label>
        <input
          type="password"
          className="form-control"
          onChange={newPassword1.setByEvent}
          value={newPassword1.value}
          placeholder="Password"
        />
      </div>
      <div className="form-group my-1">
        <label>新しいパスワード(確認)</label>
        <input
          type="password"
          className="form-control"
          onChange={newPassword2.setByEvent}
          value={newPassword2.value}
          placeholder="Password"
        />
      </div>
      <div className="form-group row my-2">
        <div className="offset-4 col-4">
          <button
            className="btn btn-primary mt-3 form-control"
            onClick={forgotPasswordSubmit}
          >
            パスワード変更
          </button>
        </div>
      </div>
    </div>
  );

  function sendConfirmationCode(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    Auth.forgotPassword(forgetUsername.value)
      .then(() => setSendCodeFlag(true))
      .catch((err) => console.log(err));
  }

  function forgotPasswordSubmit(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (newPassword1.value !== newPassword2.value) {
      alertOpen('danger', 'パスワードが一致しません');
      return;
    }
    Auth.forgotPasswordSubmit(
      forgetUsername.value,
      verifyCode.value,
      newPassword2.value
    )
      .then(() => {
        alertOpen('success', 'パスワードを変更しました');
        history.push('/login');
      })
      .catch((err) => {
        console.log(err);
        alertOpen('danger', 'パスワードの変更に失敗しました');
      });
  }
  return (
    <>
      <div className="container">
        <div className="row my-5 py-5 bg-light">
          <div className="col-6 offset-3">
            <form>{sendCodeFlag ? afterSendCode : beforeSendCode}</form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
function alertOpen(arg0: string, arg1: string) {
  throw new Error('Function not implemented.');
}
