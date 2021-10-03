import { API } from 'aws-amplify';
import { useEffect } from 'hoist-non-react-statics/node_modules/@types/react';
import { GetByCurrentFlagQuery } from '../CustomAPI';
import ContestCard from '../components/ContestCard';
import { getByCurrentFlag } from '../graphql/queries';
import JumbotronItem from '../layouts/JumbotronItem';
import { useToggleSpinner } from '../utils/hooks';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { ContestInfoActions } from '../stores/ContestInfoReducer';
import { useSelector } from 'react-redux';
import { RootState } from '../stores/Store';

const TopPage = () => {
  const { noViewSpinner } = useToggleSpinner();
  const { setContestInfo } = ContestInfoActions;
  const contestInfo = useSelector((state: RootState) => state.contestInfo);
  noViewSpinner();
  async function getContest() {
    try {
      const newContestInfo = (await API.graphql({
        query: getByCurrentFlag,
        variables: { current_flag: 1 },
      })) as GraphQLResult<GetByCurrentFlagQuery>;
      if (newContestInfo.data?.getByCurrentFlag?.items?.length) {
        dispatch(setContestInfo(newContestInfo.data.getByCurrentFlag.items));
      }
    } catch (e) {
      console.error(e);
    }
  }
  useEffect(() => {
    getContest();
  }, []);
  return (
    <div>
      <JumbotronItem contestInfo={contestInfo} />
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
function dispatch(arg0: { payload: any; type: string }) {
  throw new Error('Function not implemented.');
}
