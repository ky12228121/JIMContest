import { RankingTableProps } from '../types/interfaces';
import {
  resultTableStyle,
  tableBodyBorderStyle,
  tableHeaderBorderStyle,
} from '../styles/AllResultStyle';

const RankingTable = (props: RankingTableProps) => {
  const { data, recordType } = props;
  const tableBody = data.map((record, index) => {
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{record.name}</td>
        <td>{record.time}</td>
        <td>{record.contest}</td>
      </tr>
    );
  });
  return (
    <div>
      <div className="row">
        <div className="col h5">{recordType}</div>
      </div>
      <table className="table table-striped text-center table-bordered">
        <thead>
          <tr style={tableHeaderBorderStyle}>
            <th scope="col" style={{ width: '50px' }}>
              No.
            </th>
            <th scope="col">Name</th>
            <th scope="col" style={{ width: '120px' }}>
              Time
            </th>
            <th scope="col" style={{ width: '100px' }}>
              Contest
            </th>
          </tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    </div>
  );
};

export default RankingTable;
