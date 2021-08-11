import { Result } from '../types/interfaces';
import { MAX } from '../util/constant';

export function timeFormatFromMs(time: number): string {
  const timeFormat = time / 1000;
  const int = Math.floor(timeFormat);
  const delta = timeFormat - int;
  const point = (Math.floor(delta * Math.pow(10, 3)) / Math.pow(10, 3)) * 1000;
  const formatPoint = ('000' + point).slice(-3);
  return `${int}.${formatPoint}`;
}

export function timeFormat(time: number): string {
  const timeFormat = time * 1000;
  return timeFormatFromMs(timeFormat);
}
export function calcAverage(timeList: Result[]) {
  const dnfFlag = timeList.filter((time) => time.penalty === 'dnf').length >= 2;
  if (dnfFlag) {
    return 'DNF';
  }
  let timePreprocess = timeList.map((time) => {
    const penalty = time.penalty;
    if (penalty === 'dnf') {
      return MAX;
    }
    if (penalty === 'plus2') {
      return Number(time.result) + 2;
    }
    return Number(time.result);
  });
  timePreprocess.sort((a, b) => a - b);
  timePreprocess = timePreprocess.slice(1, 4);
  console.log(timePreprocess);
  const average = timePreprocess.reduce((a, b) => a + b) / 3;
  return String(average);
}
