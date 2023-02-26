import './setup';
import { generateRandomNumber } from './utils';

export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count + generateRandomNumber();
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(++counter));
  setCounter(0);
}
