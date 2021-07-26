import React from 'react';
// import Jumbotron from 'react-bootstrap/Jumbotron';
// import Container from 'react-bootstrap/Container';
// import { getContestNumber } from '../module';

const JumbotronItem = () => {
  return (
    <>
      <div className="bg-light p-5 mb-4 rounded-3">
        <div className="container py-4">
          <h1 className="mb-4">JIMコンテストへようこそ！</h1>
          {/* <h5>現在コンテストNo.{getContestNumber()}が開催中！</h5> */}
          <h5>現在コンテストNo.が開催中！</h5>
        </div>
      </div>
    </>
  );
};

export default JumbotronItem;
