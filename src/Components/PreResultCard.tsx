import { PreResultCardProps } from '../types/interfaces';
const PreResultCard = (props: PreResultCardProps) => {
  const { no } = props;
  return (
    <div className="card text-center mx-2 px-0 col">
      <div className="card-header h6">{no}</div>
      <div className="card-body py-3">
        <div className="row py-2">
          <div
            className="card-text h3 col"
            style={{ fontFamily: 'MSゴシック' }}
          >
            10.00
          </div>
          <hr />
        </div>
        <div className="row">
          <div className="btn btn-danger mx-1 col">DNF</div>
          <div className="btn btn-warning mx-1 col">+2</div>
        </div>
      </div>
    </div>
  );
};

export default PreResultCard;
