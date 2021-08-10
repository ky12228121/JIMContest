import { timerStyle } from '../styles/ContestStyle';
import { FinishViewProps } from '../types/interfaces';
const FinishView = (props: FinishViewProps) => {
  const { average } = props;
  return (
    <div className="row mb-3">
      <div
        className="col display-4"
        tabIndex={0}
        style={{
          ...timerStyle,
        }}
      >
        {`Ao5: ${average}`}
      </div>
    </div>
  );
};
export default FinishView;
