import React from 'react';
import { useHistory } from 'react-router';

const ContestCard = (props: any) => {
  const history = useHistory();

  const contestData = props.contestData;
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <div className="row">
              <h4 className="cubing-icon event-333 col-1"></h4>
              <h4 className="col">3×3×3</h4>
            </div>
            <hr color="#000000" />
          </div>
          <div className="card-text">
            現在名が参加中！
            <br />
            test
            <br />
            test2
          </div>
        </div>
        <div className="card-footer text-end">
          <div className="btn btn-primary" onClick={() => {}}>
            Go!
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestCard;
