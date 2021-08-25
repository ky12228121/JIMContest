import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import LastRecordTable from '../Components/LastRecordTable';
import PastRankingTable from '../Components/PastRankingTable';
import PastRecordTable from '../Components/PastRecordTable';
import TodayResultCard from '../Components/TodayResultCard';

const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];
const PersonalResult = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-2">
          <div className="col text-center">
            <h3 className="m-0">個人記録</h3>
          </div>
        </div>
        <div className="row mt-2 justify-content-evenly">
          <div className="col-4">
            <TodayResultCard />
          </div>
          <div className="col-4">
            <TodayResultCard />
          </div>
          <div className="col-4">
            <TodayResultCard />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-6">
            <div className="row">
              <div className="row m-0">
                <div className="col text-center">
                  <h4 className="bg-info">過去の記録</h4>
                </div>
              </div>
              <div className="row justify-content-evenly m-0">
                <div className="col-6 text-center">
                  <h5 className="m-0" style={{ backgroundColor: '#DDDDDD' }}>
                    前回の記録
                  </h5>
                  <LastRecordTable />
                </div>
                <div className="col-6 text-center">
                  <h5 className="m-0" style={{ backgroundColor: '#DDDDDD' }}>
                    最高ランキング
                  </h5>
                  <PastRankingTable />
                </div>
              </div>
              <div className="row mt-3 justify-content-evenly m-0">
                <div className="col-6 text-center">
                  <h5 className="m-0" style={{ backgroundColor: '#DDDDDD' }}>
                    単発記録
                  </h5>
                  <PastRecordTable />
                </div>
                <div className="col-6 text-center">
                  <h5 className="m-0" style={{ backgroundColor: '#DDDDDD' }}>
                    平均記録
                  </h5>
                  <PastRecordTable />
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="row m-0">
                <div className="col text-center">
                  <h4 className="bg-info">統計</h4>
                </div>
              </div>
              <div className="row">
                <LineChart
                  width={600}
                  height={300}
                  data={data}
                  margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                >
                  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                  <XAxis dataKey="name" />
                  <YAxis />
                </LineChart>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PersonalResult;
