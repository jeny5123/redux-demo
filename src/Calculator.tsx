import React, { SFC } from 'react';

interface Props {
  value?: number;
  increment: (delta: number) => void;
  decrement: (delta: number) => void;
}

const Calculator: SFC<Props> = ({ value, increment, decrement }) => {
  let valueRef = React.createRef<HTMLInputElement>();

  return (
    <div>
      <h1>Value: {value}</h1>
      <input type="number" ref={valueRef} />
      <button onClick={() => increment(parseInt(valueRef.current!.value))}>
        Increment
      </button>
      <button onClick={() => decrement(parseInt(valueRef.current!.value))}>
        Decrement
      </button>
    </div>
  );
};

export default Calculator;
