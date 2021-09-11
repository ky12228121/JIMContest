import { ResultTableProps } from '../types/interfaces';
import { timeFormat } from '../utils/utility';
import {
  resultBestStyle,
  resultTableStyle,
  resultWorstStyle,
  tableBodyBorderStyle,
  tableHeaderBorderStyle,
} from '../styles/AllResultStyle';

const ResultTable = (props: ResultTableProps) => {
  const { data } = props;

  const tableBody = data.map((record, index) => {
    const results = record.result;
    let best = record.best;
    if (best !== 'DNF') {
      best = timeFormat(Number(best));
    }
    let average = record.average;
    if (average !== 'DNF') {
      average = timeFormat(Number(average));
    }
    const bestIndex = results.findIndex(
      (result) => result.result === record.best
    );
    let worstIndex = 0;
    if (results.some((result) => result.penalty === 'dnf')) {
      worstIndex = results.findIndex((result) => result.penalty === 'dnf');
    } else {
      worstIndex = results.findIndex((result) => {
        const numberList = results.map((time) => Number(time.result));
        return Number(result.result) === Math.max(...numberList);
      });
    }
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{record.name}</td>
        {results.map((result, index) => {
          let text = '';
          if (result.penalty === 'dnf') {
            text = 'DNF';
          } else if (result.penalty === 'plus2') {
            text = timeFormat(Number(result.result) + 2);
          } else {
            text = timeFormat(Number(result.result));
          }
          if (index === bestIndex) {
            return <td style={resultBestStyle}>{text}</td>;
          } else if (index === worstIndex) {
            return <td style={resultWorstStyle}>{text}</td>;
          } else {
            return <td>{text}</td>;
          }
        })}
        <td style={{ ...resultTableStyle, ...tableBodyBorderStyle }}>{best}</td>
        <td>{average}</td>
      </tr>
    );
  });
  return (
    <>
      <table className="table table-striped text-center table-bordered">
        <thead>
          <tr style={tableHeaderBorderStyle}>
            <th scope="col" style={{ width: '50px' }}>
              No.
            </th>
            <th scope="col">Name</th>
            <th scope="col" style={resultTableStyle}>
              #1
            </th>
            <th scope="col" style={resultTableStyle}>
              #2
            </th>
            <th scope="col" style={resultTableStyle}>
              #3
            </th>
            <th scope="col" style={resultTableStyle}>
              #4
            </th>
            <th scope="col" style={resultTableStyle}>
              #5
            </th>
            <th
              scope="col"
              style={{ ...resultTableStyle, ...tableBodyBorderStyle }}
            >
              Best
            </th>
            <th scope="col" style={resultTableStyle}>
              Avg.
            </th>
          </tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    </>
  );
};

export default ResultTable;
