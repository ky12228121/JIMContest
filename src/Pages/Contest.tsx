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
import { RootState } from '../Stores/Store';
import { useParams } from 'react-router-dom';
import { ContestParams } from '../types/interfaces';
const Contest = () => {
  const { type } = useParams<ContestParams>();
  const scramble = "U2 F' R2 U2 F2 D' R2 F2 U' R2 D L2 U2 R F L2 U' L U2 R2 B";
  const currentNumber = useSelector((state: RootState) => state.contestStatus);

  return (
    <div>
      <div className="container">
        <div className="row" style={spacingStyle}></div>
        <div className="row" style={scrambleStyle}>
          <div className="col h4">{type}</div>
        </div>
        <div className="row" style={scrambleStyle}>
          <div className="col h3 text-center">{`#${currentNumber.number}`}</div>
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
