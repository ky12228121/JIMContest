import ResultTable from '../Components/ResultTable';

const PersonalResult = () => {
  return (
    <>
      <div className="container">
        <div className="row mt-2">
          <div className="col h1 text-center">コンテストNo.{'02'}全結果</div>
        </div>
        <div className="row mt-2">
          <div className="col-12">
            <div className="nav nav-tabs border-0" id="nav-tab" role="tablist">
              <a
                className="nav-item nav-link active"
                data-toggle="tab"
                href="#cube3"
              >
                3×3×3
              </a>
              <a className="nav-item nav-link" data-toggle="tab" href="#oh3">
                3×3×3 OH
              </a>
              <a className="nav-item nav-link" data-toggle="tab" href="#sq1">
                Square-1
              </a>
            </div>
          </div>
          <div className="col-12">
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active" id="cube3">
                {/* <ResultTable data={cube3List} /> */}
              </div>
              <div className="tab-pane fade" id="oh3">
                {/* <ResultTable data={oh3List} /> */}
              </div>
              <div className="tab-pane fade" id="sq1">
                {/* <ResultTable data={square1List} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PersonalResult;
