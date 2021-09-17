import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router-dom';
import { useToggleSpinner } from '../utils/hooks';
const NavBarItem = () => {
  const history = useHistory();
  const { viewSpinner, noViewSpinner } = useToggleSpinner();
  const onClickMove = (url: string) => {
    history.push(url);
  };
  const onClickLogout = (e: any) => {
    e.preventDefault();
    viewSpinner();
    Auth.signOut()
      .then(() => {
        noViewSpinner();
        localStorage.removeItem('username');
        history.push('/');
        window.location.reload();
      })
      .catch((error) => {
        console.log(`ログアウト失敗\n${error}`);
        noViewSpinner();
        history.push('/');
        window.location.reload();
      });
  };
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-nav">
            <div className="row navbar-brand">
              <div className="col-1 ">
                <img
                  alt=""
                  src="/logo.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  onClick={() => onClickMove('/')}
                />
              </div>
              <div className="col" onClick={() => onClickMove('/')}>
                JIMコンテスト
              </div>
            </div>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                className="nav-item btn btn-dark"
                onClick={() => onClickMove('/')}
              >
                <div>トップ</div>
              </li>
              <li className="nav-item dropdown btn btn-dark">
                <div
                  className="dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  コンテスト
                </div>
                <ul className="dropdown-menu">
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={() => onClickMove('/contest/3×3×3')}
                    >
                      <div className="row">
                        <div className="cubing-icon event-333 col-1"></div>
                        <div className="col">3×3×3</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={() => onClickMove('/contest/3×3×3 OH')}
                    >
                      <div className="row">
                        <div className="cubing-icon event-333oh col-1"></div>
                        <div className="col">3×3×3 OH</div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="dropdown-item"
                      onClick={() => onClickMove('/contest/Square-1')}
                    >
                      <div className="row">
                        <div className="cubing-icon event-sq1 col-1"></div>
                        <div className="col">Square-1</div>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown btn btn-dark">
                <div
                  className="dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  結果
                </div>
                <ul className="dropdown-menu">
                  <li
                    className="dropdown-item"
                    onClick={() => onClickMove('/result/all')}
                  >
                    <div>コンテスト結果</div>
                  </li>
                  <li
                    className="dropdown-item"
                    onClick={() => onClickMove('/result/personal')}
                  >
                    <div>個人記録</div>
                  </li>
                  <li
                    className="dropdown-item"
                    onClick={() => onClickMove('/result/ranking')}
                  >
                    <div>ランキング</div>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="navbar-navmb-2 mb-lg-0">
              <li
                className="nav-item btn btn-outline-light"
                onClick={onClickLogout}
              >
                <div>サインアウト</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBarItem;
