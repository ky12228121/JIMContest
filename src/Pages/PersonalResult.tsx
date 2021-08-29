import React, { useEffect, useRef, useState } from 'react';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import { useHistory } from 'react-router-dom';
import LastRecordTable from '../components/LastRecordTable';
import PastRankingTable from '../components/PastRankingTable';
import PastRecordTable from '../components/PastRecordTable';
import TodayResultCard from '../components/TodayResultCard';
import {
  activePastRecordButtonClass,
  inactivePastRecordButtonClass,
} from '../styles/PreResultCardStyle';

const data = [
  { name: '2021/2/1', uv: 400, pv: 2400, amt: 2400 },
  { name: '2021/2/2', uv: 200, pv: 2000, amt: 1004 },
  { name: '2021/2/3', uv: 140, pv: 2000, amt: 1004 },
];
const PersonalResult = () => {
  const history = useHistory();
  const [graphWidth, setGraphWidth] = useState(0);
  const [pastRecordView, setPastRecordView] = useState(0);
  const [graphView, setGraphView] = useState(0);
  const rowRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (rowRef.current !== null) {
      setGraphWidth(rowRef.current.clientWidth);
    }
  }, [rowRef]);
  function handleClickPastRecord(button: number) {
    if (button === pastRecordView) {
      history.push('/');
    } else {
      setPastRecordView(button);
    }
  }
  function handleClickGraph(button: number) {
    if (button === graphView) {
      history.push('all');
    } else {
      setGraphView(button);
    }
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row mt-2">
          <div className="col text-center">
            <h3 className="m-0">個人記録</h3>
          </div>
        </div>
        <div className="row mt-2 justify-content-evenly">
          <div className="col-4">
            <TodayResultCard />
          </div>
          <div className="col-4">
            <TodayResultCard />
          </div>
          <div className="col-4">
            <TodayResultCard />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6">
            <div className="row">
              <div className="row m-0">
                <div className="col text-center">
                  <h4 className="bg-info">過去の記録</h4>
                </div>
              </div>
              <div className="row m-0">
                <div className="col text-center">
                  {pastRecordView === 0 ? (
                    <LastRecordTable />
                  ) : pastRecordView === 1 ? (
                    <PastRankingTable />
                  ) : pastRecordView === 2 ? (
                    <PastRecordTable type="単発" />
                  ) : (
                    <PastRecordTable type="平均" />
                  )}
                </div>
              </div>
              <div className="row m-0 mt-3">
                <div
                  className={
                    pastRecordView === 0
                      ? activePastRecordButtonClass
                      : inactivePastRecordButtonClass
                  }
                  onClick={() => handleClickPastRecord(0)}
                >
                  前回の記録
                </div>
                <div
                  className={
                    pastRecordView === 1
                      ? activePastRecordButtonClass
                      : inactivePastRecordButtonClass
                  }
                  onClick={() => handleClickPastRecord(1)}
                >
                  最高ランキング
                </div>
                <div
                  className={
                    pastRecordView === 2
                      ? activePastRecordButtonClass
                      : inactivePastRecordButtonClass
                  }
                  onClick={() => handleClickPastRecord(2)}
                >
                  単発記録
                </div>
                <div
                  className={
                    pastRecordView === 3
                      ? activePastRecordButtonClass
                      : inactivePastRecordButtonClass
                  }
                  onClick={() => handleClickPastRecord(3)}
                >
                  平均記録
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="row m-0">
                <div className="col text-center">
                  <h4 className="bg-info" ref={rowRef}>
                    統計
                  </h4>
                </div>
              </div>
              <div className="row m-0">
                <div className="col-12">
                  <LineChart
                    width={graphWidth}
                    height={200}
                    data={data}
                    margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                  >
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                  </LineChart>
                </div>
              </div>
              <div className="row m-0 mt-3">
                <div
                  className={
                    graphView === 0
                      ? activePastRecordButtonClass
                      : inactivePastRecordButtonClass
                  }
                  onClick={() => handleClickGraph(0)}
                >
                  ランキング
                </div>
                <div
                  className={
                    graphView === 1
                      ? activePastRecordButtonClass
                      : inactivePastRecordButtonClass
                  }
                  onClick={() => handleClickGraph(1)}
                >
                  単発記録
                </div>
                <div
                  className={
                    graphView === 2
                      ? activePastRecordButtonClass
                      : inactivePastRecordButtonClass
                  }
                  onClick={() => handleClickGraph(2)}
                >
                  平均記録
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PersonalResult;
