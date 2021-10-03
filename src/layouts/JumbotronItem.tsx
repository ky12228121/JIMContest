import { JumbotronItemProps } from '../types/interfaces';

const JumbotronItem = (props: JumbotronItemProps) => {
  const { contestInfo } = props;
  return (
    <>
      {contestInfo.map((item) => (
        <div className="bg-light p-5 mb-4 rounded-3" key={item.contest_nubmer}>
          <div className="container py-4">
            <h1 className="mb-4">JIMコンテストへようこそ！</h1>
            <h5>現在コンテストNo.{item.contest_nubmer}が開催中！</h5>
          </div>
        </div>
      ))}
    </>
  );
};

export default JumbotronItem;
