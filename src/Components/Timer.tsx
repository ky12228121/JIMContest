import React, { useEffect, useRef, useState } from 'react';
import { timerStyle } from '../styles/ContestStyle';
import { TimerType } from '../types/types';

const Timer = () => {
  const [timerText, setTimerText] = useState('Inspection');
  const [timerState, setTimerState] = useState('init');
  const [longPressFlag, setLongPressFlag] = useState(false);
  const [inspectionTimerId, setInspectionTimerId] = useState<TimerType>(null);
  const [longpressTimerId, setLongpressTimerId] = useState<TimerType>(null);
  const [solveTimerId, setSolveTimerId] = useState<TimerType>(null);
  const [altFlag, setAltFlag] = useState(false);
  const inspectionStartTime = useRef<Date | null>(null);
  const solveStartTime = useRef<Date | null>(null);
  function inspectionTimer() {
    const currentTime = new Date();
    let startTime = inspectionStartTime.current;
    console.log(startTime);
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
    setTimerText(timeFormat(delta));
  }
  function keyDownInit() {
    const currentTime = new Date();
    inspectionStartTime.current = currentTime;
    const id = setInterval(inspectionTimer, 100);
    setInspectionTimerId(id);
    setAltFlag(true);
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
      setTimerText(timeFormat(delta));
      setTimerState('init');
    }
  }
  function timeFormat(time: number): string {
    const timeFormat = time / 1000;
    const int = Math.floor(timeFormat);
    const delta = timeFormat - int;
    const point =
      (Math.floor(delta * Math.pow(10, 3)) / Math.pow(10, 3)) * 1000;
    const formatPoint = ('000' + point).slice(-3);
    return `${int}.${formatPoint}`;
  }

  function handleKeyDownTimer(event: React.KeyboardEvent) {
    if (!altFlag) {
      if (timerState === 'init') {
        if (event.key === ' ') {
          keyDownInit();
        }
      }
      if (timerState === 'inspection') {
        if (event.key === ' ') {
          keyDownInspection();
        }
      }
      if (timerState === 'counting') {
        keyDownCounting();
      }
    }
  }
  function keyUpInit() {
    setAltFlag(false);
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
    } else {
      if (longpressTimerId !== null) {
        clearTimeout(longpressTimerId);
        setLongpressTimerId(null);
      }
    }
  }
  function handleKeyUpTimer(event: React.KeyboardEvent) {
    if (timerState === 'init') {
      keyUpInit();
    }
    if (timerState === 'inspection') {
      keyUpInspection();
    }
  }
  return (
    <div className="row mb-3">
      <div
        className="col display-4"
        tabIndex={0}
        style={timerStyle}
        onKeyDown={handleKeyDownTimer}
        onKeyUp={handleKeyUpTimer}
      >
        {timerText}
      </div>
    </div>
  );
};
export default Timer;
