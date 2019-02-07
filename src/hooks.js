import React, { useState } from 'react';

export default function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [textCount, setTextCount] = useState(0);
  const [isRight, setChoice] = useState(0);
  const [text, setText] = useState('something');

  return (
    <div>
      <p>User text is {text}</p>
      <input
        onChange={e => {
          setText(e.target.value);
          setTextCount(textCount + 1);
          if (e.target.value === '') {
            setTextCount(0);
          }
        }}
      />
      <p>User inputed {textCount} characters</p>
      <p>You clicked {count} times </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <p>The price is {isRight ? `yes` : `no`}</p>
      <button onClick={() => setChoice(isRight + 1)}>Change truthy</button>
    </div>
  );
}
