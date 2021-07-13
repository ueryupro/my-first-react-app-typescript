import React, {useEffect, useRef, useState} from 'react';


const Counter: React.FC<{}> = () => {
  const initiaValue: any = 0;
  const [value, setValue] = useState<number>(initiaValue);

const increment = () => {
  setValue((prevState) => prevState + 1);
};
const decrement = () => {
  setValue((prevState) => prevState - 1);
};

const renderTimes = useRef<number>(0);
useEffect(() => {
  renderTimes.current = renderTimes.current + 1;
});

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times!</div>
    </div>
  );
};

export default Counter;
