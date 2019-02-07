import React, { useState } from 'react';

export default function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(10);
  const [isRight, setChoice] = useState(0);

  return (
    <div>
      <p> You clicked {count}times </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <p> The price is {isRight ? `yes` : `no`}</p>
      <button onClick={() => setChoice(isRight + 1)}>Change truthy</button>
    </div>
  );
}
