import { ChangeEvent, useState } from 'react';
export function useChangeEvent(initial: string) {
  const [value, setValue] = useState(initial);
  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setValue(e.currentTarget.value);
  }
  function setValueMyself(initValue: string) {
    setValue(initValue);
  }
  return { value, setByEvent: handleInput, setBySelf: setValueMyself };
}
