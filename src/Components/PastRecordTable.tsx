import { CUBE3, OH, SQ1 } from '../util/constant';

const PastRecordTable = () => {
  return (
    <div className="container">
      <table className="table table-sm text-center m-0">
        <thead>
          <tr>
            <th>種目</th>
            <th>記録</th>
            <th>コンテストNo.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{CUBE3}</td>
            <td>10.00</td>
            <td>#d210825</td>
          </tr>
          <tr>
            <td>{OH}</td>
            <td>10.00</td>
            <td>#d210825</td>
          </tr>
          <tr>
            <td>{SQ1}</td>
            <td>10.00</td>
            <td>#d210825</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default PastRecordTable;
