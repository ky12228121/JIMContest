import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { useHistory } from 'react-router-dom';
import { Auth } from 'aws-amplify';
const NavBarItem = () => {
  const history = useHistory();
  const onClickMove = (url: string) => {
    history.push(url);
  };
  const onClickLogout = (e: any) => {
    e.preventDefault();
    Auth.signOut()
      .then((data) => {
        console.log(data);
        localStorage.removeItem('username');
        history.push('/');
        window.location.reload();
      })
      .catch((error) => {
        console.log(`ログアウト失敗\n${error}`);
        history.push('/');
        window.location.reload();
      });
  };
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="navbar-nav">
            <div className="row">
              <div className="col-1 avbar-brand">
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
            <ul className="navbar-nav mr-auto">
              <li className="nav-item" onClick={() => onClickMove('/')}>
                <div className="nav-link">Home</div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Contest
                </a>
              </li>
              <ul className="dropdown-menu">
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => onClickMove('/contest/cube3')}
                  >
                    <span className="cubing-icon event-333 col-1"></span>
                    <span className="col">3×3×3</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => onClickMove('/contest/oh3')}
                  >
                    <span className="cubing-icon event-333 col-1"></span>
                    <span className="col">3×3×3 OH</span>
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    onClick={() => onClickMove('/contest/square1')}
                  >
                    <span className="cubing-icon event-333 col-1"></span>
                    <span className="col">Square-1</span>
                  </a>
                </li>
              </ul>
              <li
                className="nav-item"
                onClick={() => onClickMove('/contest/result/all')}
              >
                <a className="nav-link">All results</a>
              </li>
              <li
                className="nav-item"
                onClick={() => onClickMove('/contest/result/personal')}
              >
                <a className="nav-link">All resultPersonal result</a>
              </li>
            </ul>
            <ul>
              <li className="nav-item" onClick={onClickLogout}>
                <a className="nav-link">Sign out</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBarItem;
