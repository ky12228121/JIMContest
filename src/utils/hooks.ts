import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AlertActions } from '../stores/AlertReducer';
import { SpinnerActions } from '../stores/SpinnerReducer';
import { RootState } from '../stores/Store';
export function useChangeEvent(initial: string) {
  const [value, setValue] = useState(initial);
  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setValue(e.currentTarget.value);
  }
  function setValueMyself(initValue: string = '') {
    setValue(initValue);
  }
  return { value, setByEvent: handleInput, setBySelf: setValueMyself };
}

export function useAlertOpen() {
  const dispatch = useDispatch();
  const { setAlertOpenFlag, setAlertInfo } = AlertActions;
  function open(type: string, message: string) {
    dispatch(setAlertInfo({ type, message }));
    dispatch(setAlertOpenFlag(true));
    setTimeout(() => {
      dispatch(setAlertOpenFlag(false));
    }, 3000);
  }
  return open;
}

export function useToggleSpinner() {
  const dispatch = useDispatch();
  const { setSpinnerFlag } = SpinnerActions;
  function viewSpinner() {
    dispatch(setSpinnerFlag(true));
  }
  function noViewSpinner() {
    dispatch(setSpinnerFlag(false));
  }
  return { viewSpinner, noViewSpinner };
}
