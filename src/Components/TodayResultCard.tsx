import { CUBE3 } from '../util/constant';

const TodayResultCard = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center h4">{CUBE3}</div>
      </div>
      <div className="card">
        <div className="card-header h5">
          <div className="row">
            <div className="col-6">単発：10.00</div>
            <div className="col-6">平均：20.00</div>
          </div>
        </div>
        <div className="card-body p-0">
          <div className="row my-2 mx-0">
            <div className="col-6 p-0">
              <table className="table table-sm text-center m-0">
                <tbody>
                  <tr>
                    <td className="p-0"></td>
                    <td className="p-0"></td>
                  </tr>
                  <tr>
                    <td>#1</td>
                    <td>10.00</td>
                  </tr>
                  <tr>
                    <td>#2</td>
                    <td>10.00</td>
                  </tr>
                  <tr>
                    <td>#3</td>
                    <td>10.00</td>
                  </tr>
                  <tr>
                    <td>#4</td>
                    <td>10.00</td>
                  </tr>
                  <tr>
                    <td>#5</td>
                    <td>10.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-6 p-0">
              <div className="row">
                <div className="h5 text-center">ランキング</div>
              </div>
              <div className="row">
                <div className="h6 text-center">単発：7位</div>
              </div>
              <div className="row">
                <div className="h6 text-center">平均：7位</div>
              </div>
              <div className="row justify-content-center my-2">
                <button className="col-7 btn btn-sm btn-outline-primary">
                  スクランブル
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TodayResultCard;
