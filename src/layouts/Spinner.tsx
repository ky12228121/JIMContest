import { useSelector } from 'react-redux';
import { SpinnerActions } from '../stores/SpinnerReducer';
import { RootState } from '../stores/Store';
import { SpinnerProps } from '../types/interfaces';

const Spinner = (props: SpinnerProps) => {
  const { children } = props;
  const spinnerFlag = useSelector(
    (state: RootState) => state.spinner.spinnerFlag
  );
  let spinnerClassName = '';
  let childrenClassName = '';
  if (spinnerFlag) {
    spinnerClassName =
      'd-flex justify-content-center align-items-center vh-100 bg-light';
    childrenClassName = 'd-none';
  } else {
    spinnerClassName = 'd-none';
    childrenClassName = '';
  }
  return (
    <div>
      <div className={spinnerClassName}>
        <div className="spinner-border" role="status" id="loading">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      <div className={childrenClassName}>{children}</div>
    </div>
  );
};

export default Spinner;
