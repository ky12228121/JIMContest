import { useDispatch, useSelector } from 'react-redux';
import { EventResultActions } from '../stores/EventResultReducer';
import { RootState } from '../stores/Store';
import {
  activeDNFButtonClass,
  activePlus2ButtonClass,
  inactiveCardStyle,
  inactiveDNFButtonClass,
  inactivePlus2ButtonClass,
} from '../styles/PreResultCardStyle';
import { PreResultCardProps } from '../types/interfaces';

const PreResultCard = (props: PreResultCardProps) => {
  const { no, result } = props;
  const dispatch = useDispatch();
  const status = useSelector((state: RootState) => state.eventStatus);
  const currentNumber = status.number;
  const { setPenalty } = EventResultActions;
  const currentPenalty = result.penalty;
  function handleClickDnf() {
    if (currentPenalty === 'dnf') {
      dispatch(setPenalty({ number: no, penalty: 'no' }));
    } else {
      dispatch(setPenalty({ number: no, penalty: 'dnf' }));
    }
  }
  function handleClickPlus2() {
    if (currentPenalty === 'dnf') {
      return;
    } else if (currentPenalty === 'plus2') {
      dispatch(setPenalty({ number: no, penalty: 'no' }));
    } else {
      dispatch(setPenalty({ number: no, penalty: 'plus2' }));
    }
  }
  function resultFormat(time: string) {
    console.log(`no:${no}, time:${time}, penaty:${currentPenalty}`);
    if (currentPenalty === 'dnf') {
      return 'DNF';
    } else if (currentPenalty === 'plus2') {
      return String(Number(time) + 2);
    } else {
      return time;
    }
  }
  return (
    <div className="card text-center mx-2 px-0 col">
      <div className="card-header h6">{`#${no}`}</div>
      <div className="card-body py-3">
        <div className="row py-2 ">
          <div
            className="card-text h3 col"
            style={{ fontFamily: 'MSゴシック' }}
          >
            {resultFormat(result.result)}
          </div>
          <hr />
        </div>
        <div className="row">
          <button
            className={
              result.penalty === 'dnf'
                ? activeDNFButtonClass
                : inactiveDNFButtonClass
            }
            onClick={handleClickDnf}
            disabled={currentNumber < no}
          >
            DNF
          </button>
          <button
            className={
              result.penalty === 'plus2'
                ? activePlus2ButtonClass
                : inactivePlus2ButtonClass
            }
            onClick={handleClickPlus2}
            disabled={currentNumber < no}
          >
            +2
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreResultCard;
