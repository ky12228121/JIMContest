import ContestCard from '../components/ContestCard';
import JumbotronItem from '../layouts/JumbotronItem';
const TopPage = () => {
  return (
    <div>
      <JumbotronItem />
      <div className="container">
        <div className="row">
          <div className="col">
            <ContestCard type="3×3×3" />
          </div>
          <div className="col">
            <ContestCard type="3×3×3 OH" />
          </div>
          <div className="col">
            <ContestCard type="Square-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPage;
