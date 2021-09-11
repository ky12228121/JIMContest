import AllResultFilter from '../components/AllResultFilter';
import ResultTable from '../components/ResultTable';

const testData = [
  {
    name: '八幡',
    type: '3×3×3',
    result: [
      {
        result: '30.911',
        penalty: 'no',
      },
      {
        result: '31.911',
        penalty: 'no',
      },
      {
        result: '32.911',
        penalty: 'plus2',
      },
      {
        result: '29.911',
        penalty: 'dnf',
      },
      {
        result: '36.911',
        penalty: 'no',
      },
    ],
    best: '30.911',
    average: '33.911',
  },
  {
    name: '八幡',
    type: '3×3×3',
    result: [
      {
        result: '30.911',
        penalty: 'no',
      },
      {
        result: '31.911',
        penalty: 'no',
      },
      {
        result: '32.911',
        penalty: 'plus2',
      },
      {
        result: '29.911',
        penalty: 'dnf',
      },
      {
        result: '36.911',
        penalty: 'no',
      },
    ],
    best: '30.911',
    average: '33.911',
  },
  {
    name: '八幡',
    type: '3×3×3',
    result: [
      {
        result: '30.911',
        penalty: 'no',
      },
      {
        result: '31.911',
        penalty: 'no',
      },
      {
        result: '32.911',
        penalty: 'plus2',
      },
      {
        result: '29.911',
        penalty: 'dnf',
      },
      {
        result: '36.911',
        penalty: 'no',
      },
    ],
    best: '30.911',
    average: '33.911',
  },
];
const AllResult = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-2">
          <div className="col h3 text-center">コンテストNo.{'01'}全結果</div>
        </div>
        <AllResultFilter />
        <div className="row mt-2">
          <div className="col-12">
            <ul className="nav nav-tabs border-0" id="nav-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  id="cube3-tab"
                  className="nav-link active"
                  data-toggle="tab"
                  role="tab"
                  data-bs-toggle="tab"
                  data-bs-target="#cube3"
                  type="button"
                >
                  3×3×3
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  id="oh3-tab"
                  className="nav-link"
                  data-toggle="tab"
                  role="tab"
                  data-bs-toggle="tab"
                  data-bs-target="#oh3"
                  type="button"
                >
                  3×3×3 OH
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  id="sq1-tab"
                  className="nav-link"
                  data-toggle="tab"
                  role="tab"
                  data-bs-toggle="tab"
                  data-bs-target="#sq1"
                  type="button"
                >
                  Square-1
                </button>
              </li>
            </ul>
          </div>
          <div className="col-12">
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="cube3"
                role="tabpanel"
              >
                <ResultTable data={testData} />
              </div>
              <div className="tab-pane fade" id="oh3" role="tabpanel">
                <ResultTable data={testData} />
              </div>
              <div className="tab-pane fade" id="sq1" role="tabpanel">
                <ResultTable data={testData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AllResult;
