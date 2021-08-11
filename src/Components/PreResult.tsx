import { useSelector } from 'react-redux';
import { RootState } from '../Stores/Store';
import PreResultCard from './PreResultCard';
const PreResult = () => {
  const results = useSelector((state: RootState) => state.contestResult);

  return (
    <div className="row">
      <PreResultCard no={1} result={results.result1} />
      <PreResultCard no={2} result={results.result2} />
      <PreResultCard no={3} result={results.result3} />
      <PreResultCard no={4} result={results.result4} />
      <PreResultCard no={5} result={results.result5} />
    </div>
  );
};

export default PreResult;
