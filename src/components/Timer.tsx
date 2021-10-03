import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EventResultActions } from '../stores/EventResultReducer';
import { EventStatusActions } from '../stores/EventStatusReducer';
import { RootState } from '../stores/Store';
import { timerStyle } from '../styles/ContestStyle';
import { altFlagDefault } from '../types/defalut';
import { AltFlag } from '../types/interfaces';
import { TimerType } from '../types/types';
import { timeFormatFromMs } from '../utils/utility';
import FinishView from './FInishView';

const Timer = () => {
  const dispatch = useDispatch();
  const { setResult } = EventResultActions;
  const { setNumberIncrease, setFinish } = EventStatusActions;
  const [timerText, setTimerText] = useState('0.000');
  const [timerState, setTimerState] = useState('init');
  const [longPressFlag, setLongPressFlag] = useState(false);
  const [inspectionTimerId, setInspectionTimerId] = useState<TimerType>(null);
  const [longpressTimerId, setLongpressTimerId] = useState<TimerType>(null);
  const [solveTimerId, setSolveTimerId] = useState<TimerType>(null);
  const [altFlag, setAltFlag] = useState<AltFlag>(altFlagDefault);
  const [timerDisabled, setTimerDisabled] = useState(false);
  const inspectionStartTime = useRef<Date | null>(null);
  const solveStartTime = useRef<Date | null>(null);
  const currentState = useSelector((state: RootState) => state.contestStatus);
  const timerRef = useRef<HTMLDivElement | null>(null);
  function inspectionTimer() {
    const currentTime = new Date();
    let startTime = inspectionStartTime.current;
    if (startTime === null) {
      startTime = currentTime;
    }

    const delta = currentTime.getTime() - startTime.getTime();
    setTimerText(String(15 - Math.floor(delta / 1000)));
  }
  function solveTimer() {
    const currentTime = new Date();
    let startTime = solveStartTime.current;
    if (startTime === null) {
      startTime = currentTime;
    }
    const delta = currentTime.getTime() - startTime.getTime();
    setTimerText(timeFormatFromMs(delta));
  }

  function handleKeyDownTimer(event: React.KeyboardEvent) {
    if (!altFlag.flag) {
      setAltFlag({
        flag: true,
        event,
      });
    }
  }

  function handleKeyUpTimer(event: React.KeyboardEvent) {
    if (altFlag.flag) {
      setAltFlag({
        flag: false,
        event,
      });
    }
  }

  function keyDownInit() {
    const currentTime = new Date();
    inspectionStartTime.current = currentTime;
    const id = setInterval(inspectionTimer, 100);
    setInspectionTimerId(id);
  }

  function keyDownInspection() {
    const id = setTimeout(() => {
      setLongPressFlag(true);
      setLongpressTimerId(null);
    }, 300);
    setLongpressTimerId(id);
  }

  function keyDownCounting() {
    if (solveTimerId !== null) clearInterval(solveTimerId);
    const currentTime = new Date();
    if (solveStartTime.current !== null) {
      const delta = currentTime.getTime() - solveStartTime.current.getTime();
      setTimerText(timeFormatFromMs(delta));
      dispatch(
        setResult({
          number: currentState.number + 1,
          result: timeFormatFromMs(delta),
        })
      );
      if (currentState.number < 4) {
        dispatch(setNumberIncrease({}));
      } else {
        dispatch(setFinish({}));
        dispatch(setNumberIncrease({}));
        setTimerDisabled(true);
        if (timerRef.current !== null) {
          timerRef.current.blur();
        }
      }
    }
  }

  function keyUpInit() {
    setTimerState('inspection');
  }

  function keyUpInspection() {
    if (longPressFlag) {
      const currentTime = new Date();
      setTimerState('counting');
      if (inspectionTimerId !== null) clearInterval(inspectionTimerId);
      const id = setInterval(solveTimer, 1);
      setSolveTimerId(id);
      solveStartTime.current = currentTime;
      setLongPressFlag(false);
    }
    if (longpressTimerId !== null) {
      clearTimeout(longpressTimerId);
      setLongpressTimerId(null);
    }
  }
  function keyUpCounting() {
    setTimerState('init');
  }

  useEffect(() => {
    if (altFlag.event === null) {
      return;
    }
    const key = altFlag.event.key;
    if (altFlag.flag) {
      if (timerState === 'init') {
        if (key === ' ') {
          keyDownInit();
        }
      }
      if (timerState === 'inspection') {
        if (key === ' ') {
          keyDownInspection();
        }
      }
      if (timerState === 'counting') {
        keyDownCounting();
      }
    } else {
      if (timerState === 'init') {
        if (key === ' ') {
          keyUpInit();
        }
      }
      if (timerState === 'inspection') {
        if (key === ' ') {
          keyUpInspection();
        }
      }
      if (timerState === 'counting') {
        keyUpCounting();
      }
    }
  }, [altFlag]);

  return (
    <div className="row mb-3">
      {currentState.isFinish ? (
        <FinishView />
      ) : (
        <div
          className="col display-4"
          tabIndex={0}
          style={{
            ...timerStyle,
            backgroundColor: longPressFlag
              ? '#CCFFCC'
              : timerState === 'inspection'
              ? '#FFCCFF'
              : '#EEEEEE',
            pointerEvents: timerDisabled ? 'none' : 'auto',
          }}
          onKeyDown={handleKeyDownTimer}
          onKeyUp={handleKeyUpTimer}
          ref={timerRef}
        >
          {timerText}
        </div>
      )}
    </div>
  );
};
export default Timer;
