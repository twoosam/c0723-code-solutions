import { useState } from 'react';

export default function Buttons() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count - 1)}>Down</button>
      {count}
      <button onClick={() => setCount(count + 1)}>Up</button>
    </div>
  );
}
