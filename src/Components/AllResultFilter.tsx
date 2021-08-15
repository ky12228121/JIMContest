import { CUBE3, OH, SQ1 } from '../util/constant';

const AllResultFilter = () => {
  return (
    <div className="row py-2 my-2 px-2 bg-light">
      <div className="col-3">
        <div className=" form-floating">
          <select className="form-select" id="contestSelect">
            <option selected value="00">
              最新
            </option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
          </select>
          <label htmlFor="contestSelect">コンテストNo.</label>
        </div>
      </div>
      <div className="col-3">
        <div className=" form-floating">
          <select className="form-select" id="contestType">
            <option selected>全種目</option>
            <option value={CUBE3}>{CUBE3}</option>
            <option value={OH}>{OH}</option>
            <option value={SQ1}>{SQ1}</option>
          </select>
          <label htmlFor="contestType">種目</label>
        </div>
      </div>
    </div>
  );
};

export default AllResultFilter;
