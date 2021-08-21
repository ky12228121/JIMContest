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
      </div>
    </>
  );
};
export default PersonalResult;
