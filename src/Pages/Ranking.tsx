import AllResultFilter from '../Components/AllResultFilter';
import RankingFilter from '../Components/RankingFilter';
import RankingTable from '../Components/RankingTable';
import ResultTable from '../Components/ResultTable';

const testData = [
  {
    name: '八幡',
    type: '3×3×3',
    time: '30.911',
    contest: '01',
  },
  {
    name: '八幡',
    type: '3×3×3',
    time: '31.911',
    contest: '02',
  },
  {
    name: '八幡',
    type: '3×3×3',
    time: '32.911',
    contest: '01',
  },
];
const Ranking = () => {
  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col h3 text-center">JIMランキング</div>
      </div>
      <RankingFilter />
      <div className="row">
        <div className="col-6">
          <RankingTable data={testData} recordType="単発" />
        </div>
        <div className="col-6">
          <RankingTable data={testData} recordType="平均" />
        </div>
      </div>
    </div>
  );
};
export default Ranking;
