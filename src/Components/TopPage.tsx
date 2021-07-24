import React, { useEffect, useState } from 'react';
import JumbotronItem from '../Layout/jumbotronItem';
import ContestCard from '../Layout/contestCard';
import { useSelector, useDispatch } from 'react-redux';
import { API, graphqlOperation } from 'aws-amplify';
import { getSolveStatus, listUsers } from '../graphqlMain/queries';
import { contestStatusActions } from '../stores/contestStatusReducer';
import { calcAverage, timeToText } from '../module';

const TopPage = () => {
  const initContestData = {
    count: 0,
    single: {},
    average: {},
  };
  const [cube3Data, setCube3Data] = useState(initContestData);
  const [oh3Data, setOh3Data] = useState(initContestData);
  const [square1Data, setSquare1Data] = useState(initContestData);
  const username = useSelector((state: any) => state.user.username);
  const dispatch = useDispatch();
  const {
    setCube3Status,
    setOh3Status,
    setSquare1Status,
  } = contestStatusActions;
  const setUserStatus = async () => {
    let data: any;
    data = await API.graphql(
      graphqlOperation(getSolveStatus, {
        id: username,
      })
    );
    const userData = data.data.getUser;
    dispatch(setCube3Status(userData.cube3_status));
    dispatch(setOh3Status(userData.oh3_status));
    dispatch(setSquare1Status(userData.square1_status));
  };

  const setCotenstDetail = async () => {
    const timeSortSingle = (a: any, b: any) => {
      const a_result = { ...a };
      const b_result = { ...b };
      if (a_result.penalty === 'dnf') a_result.time = 60000;
      if (b_result.penalty === 'dnf') b_result.time = 60000;
      return a_result.time - b_result.time;
    };
    const picUpSingleTime = (timeList: any) => {
      const topData = timeList.sort((a: any, b: any) => {
        const a_result = [...a.result];
        const b_result = [...b.result];
        return (
          a_result.sort((c, d) => timeSortSingle(c, d)).shift().time -
          b_result.sort((c, d) => timeSortSingle(c, d)).shift().time
        );
      })[0];
      return {
        time: timeToText(
          topData.result.sort((a: any, b: any) => timeSortSingle(a, b))[0].time
        ),
        username: topData.username,
      };
    };
    const picUpAverageTime = (timeList: any) => {
      const topData = timeList.sort((a: any, b: any) => {
        return (
          Number(calcAverage(a.result, true)) -
          Number(calcAverage(b.result, true))
        );
      })[0];
      return {
        time: timeToText(String(calcAverage(topData.result, true))),
        username: topData.username,
      };
    };

    let res: any;
    res = await API.graphql(
      graphqlOperation(listUsers, {
        filter: {
          or: [
            {
              cube3_status: {
                eq: 'finish',
              },
            },
            {
              oh3_status: {
                eq: 'finish',
              },
            },
            {
              square1_status: {
                eq: 'finish',
              },
            },
          ],
        },
      })
    );
    console.log(res);
    const result = res.data.listUsers.items;
    console.log('result', result);
    const cube3List = result
      .filter((allData: any) => allData.cube3_status === 'finish')
      .map((filterdData: any) => {
        return {
          username: filterdData.user_name,
          result: filterdData.cube3_result,
        };
      });
    const oh3List = result
      .filter((allData: any) => allData.oh3_status === 'finish')
      .map((filterdData: any) => {
        return {
          username: filterdData.user_name,
          result: filterdData.oh3_result,
        };
      });
    const square1List = result
      .filter((allData: any) => allData.square1_status === 'finish')
      .map((filterdData: any) => {
        return {
          username: filterdData.user_name,
          result: filterdData.square1_result,
        };
      });
    const noDataObject = {
      time: '-',
      username: '-',
    };
    const cube3Count = cube3List.length;
    const oh3Count = oh3List.length;
    const square1Count = square1List.length;
    const cube3Single = cube3Count ? picUpSingleTime(cube3List) : noDataObject;
    const oh3Single = oh3Count ? picUpSingleTime(oh3List) : noDataObject;
    const square1Single = square1Count
      ? picUpSingleTime(square1List)
      : noDataObject;
    const cube3Average = cube3Count
      ? picUpAverageTime(cube3List)
      : noDataObject;
    const oh3Average = oh3Count ? picUpAverageTime(oh3List) : noDataObject;
    const square1Average = square1Count
      ? picUpAverageTime(square1List)
      : noDataObject;

    setCube3Data({
      count: cube3Count,
      single: cube3Single,
      average: cube3Average,
    });
    setOh3Data({
      count: oh3Count,
      single: oh3Single,
      average: oh3Average,
    });
    setSquare1Data({
      count: square1Count,
      single: square1Single,
      average: square1Average,
    });
  };
  useEffect(() => {
    setUserStatus();
    setCotenstDetail();
  }, []);
  return (
    <>
      <JumbotronItem />
      <ContestCard
        cube3Data={cube3Data}
        oh3Data={oh3Data}
        square1Data={square1Data}
      />
    </>
  );
};

export default TopPage;