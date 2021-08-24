import { CUBE3, OH, SQ1 } from '../util/constant';

const PastRankingTable = () => {
  return (
    <div className="container">
      <table className="table table-sm text-center m-0">
        <thead>
          <tr>
            <th rowSpan={2}>種目</th>
            <th>日</th>
            <th>月</th>
            <th rowSpan={2}>コンテストNo.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{CUBE3}</td>
            <td>7</td>
            <td>3</td>
            <td>#d210825</td>
          </tr>
          <tr>
            <td>{OH}</td>
            <td>10</td>
            <td>3</td>
            <td>#d210825</td>
          </tr>
          <tr>
            <td>{SQ1}</td>
            <td>10</td>
            <td>3</td>
            <td>#d210825</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default PastRankingTable;
