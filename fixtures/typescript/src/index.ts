import { generateRandomNumber } from '@/utils';

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0;
  const setCounter = (count: number) => {
    counter = count + generateRandomNumber();
    element.innerHTML = `count is ${counter}`;
  };

  element.addEventListener('click', () => {
    setCounter(counter + 1);
  });
  setCounter(0);
}
