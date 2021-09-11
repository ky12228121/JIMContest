import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../stores/Store';

const Alert = () => {
  const alertOpenFlag = useSelector(
    (state: RootState) => state.alert.alertOpenFlag
  );
  const alertInfo = useSelector((state: RootState) => state.alert.alertInfo);
  return (
    <div className="position-relative container">
      <div className="position-absolute top-0 start-50 translate-middle">
        {alertOpenFlag ? (
          <div className={`alert alert-${alertInfo.type}`} role="alert">
            <span className="col-11 me-3">{alertInfo.message}</span>
            <button
              type="button"
              className="btn-close col-1"
              aria-label="Close"
              data-bs-dismiss="alert"
            ></button>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default Alert;
