import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../Stores/Store';
import { finishViewStyle } from '../styles/ContestStyle';
import { calcAverage, timeFormat } from '../util/utility';

const FinishView = () => {
  const [average, setAverage] = useState('');
  const currentResult = useSelector((state: RootState) => state.contestResult);

  useEffect(() => {
    let ave = calcAverage(Object.values(currentResult));
    if (ave !== 'DNF') {
      ave = timeFormat(Number(ave));
    }
    setAverage(ave);
  });
  return (
    <div className="row mb-3">
      <div
        className="display-4 row justify-content-center align-items-center"
        tabIndex={0}
        style={{
          ...finishViewStyle,
          backgroundColor: '#EEEEEE',
        }}
      >
        <div className="col-12 text-center">
          {`ao5: ${average}`}
          <br />
          <button className="btn btn-primary btn-lg">結果送信</button>
        </div>
      </div>
    </div>
  );
};
export default FinishView;
