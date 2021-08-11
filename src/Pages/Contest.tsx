import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PreResult from '../Components/PreResult';
import Timer from '../Components/Timer';
import { RootState } from '../Stores/Store';
import { scrambleStyle, spacingStyle } from '../styles/ContestStyle';
import { ContestParams } from '../types/interfaces';
const Contest = () => {
  const { type } = useParams<ContestParams>();
  const scramble = 'U2 F R2 U2 F2 D R2 F2 U R2 D L2 U2 R F L2 U L U2 R2 B';
  const contestStatus = useSelector((state: RootState) => state.contestStatus);

  return (
    <div>
      <div className="container">
        <div className="row" style={spacingStyle}></div>
        <div className="row" style={scrambleStyle}>
          <div className="col h2">{type}</div>
        </div>
        {contestStatus.isFinish ? (
          <div
            className="display-5 text-center"
            style={{ fontFamily: 'MSゴシック' }}
          >
            <b>Finish!</b>
          </div>
        ) : (
          <div>
            <div className="row" style={scrambleStyle}>
              <div className="col h3 text-center">{`#${
                contestStatus.number + 1
              }`}</div>
            </div>
            <div className="row" style={scrambleStyle}>
              <div className="col h4 text-center">{scramble}</div>
            </div>
          </div>
        )}
        <Timer />
        <PreResult />
      </div>
    </div>
  );
};

export default Contest;
