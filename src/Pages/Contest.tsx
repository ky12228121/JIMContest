import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { API, graphqlOperation } from 'aws-amplify';
import {
  timerStyle,
  spacingStyle,
  scrambleStyle,
} from '../styles/ContestStyle';
import PreResult from '../Components/PreResult';
import Timer from '../Components/Timer';
const Contest = () => {
  const scramble = "U2 F' R2 U2 F2 D' R2 F2 U' R2 D L2 U2 R F L2 U' L U2 R2 B";
  return (
    <div>
      <div className="container">
        <div className="row" style={spacingStyle}></div>
        <div className="row" style={scrambleStyle}>
          <div className="col h4">Square-1</div>
        </div>
        <div className="row" style={scrambleStyle}>
          <div className="col h3 text-center">#1</div>
        </div>
        <div className="row" style={scrambleStyle}>
          <div className="col h4 text-center">{scramble}</div>
        </div>
        <Timer />
        <PreResult />
      </div>
    </div>
  );
};

export default Contest;
