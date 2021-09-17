import React from 'react';
import { useHistory } from 'react-router';

const ContestCard = (props: any) => {
  const history = useHistory();
  const type = props.type;
  let icon = <div />;
  if (type === '3×3×3') {
    icon = <h4 className="cubing-icon event-333 col-1 m-0 me-1"></h4>;
  } else if (type === '3×3×3 OH') {
    icon = <h4 className="cubing-icon event-333oh col-1 m-0 me-1"></h4>;
  } else if (type === 'Square-1') {
    icon = <h4 className="cubing-icon event-sq1 col-1 m-0 me-1"></h4>;
  }
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <div className="row">
              {icon}
              <h4 className="col m-0">{type}</h4>
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
          <div
            className="btn btn-primary"
            onClick={() => {
              history.push(`contest/${type}`);
            }}
          >
            Go!
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestCard;
