import LastRecordTable from '../Components/LastRecordTable';
import PastRankingTable from '../Components/PastRankingTable';
import PastRecordTable from '../Components/PastRecordTable';
import ResultTable from '../Components/ResultTable';
import TodayResultCard from '../Components/TodayResultCard';

const PersonalResult = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mt-2">
          <div className="col h3 text-center">個人記録</div>
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
        <div className="row mt-2">
          <div className="col-6 text-center">
            <div className="row">
              <h4>過去の記録</h4>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="row ">
                  <h5>前回の記録</h5>
                  <LastRecordTable />
                </div>
                <div className="row mt-2">
                  <h5>最高ランキング</h5>
                  <PastRankingTable />
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <h5>単発記録</h5>
                  <PastRecordTable />
                </div>
                <div className="row mt-2">
                  <h5>平均記録</h5>
                  <PastRecordTable />
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 h4 text-center">統計</div>
        </div>
      </div>
    </>
  );
};
export default PersonalResult;
