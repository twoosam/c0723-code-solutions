import { useState } from 'react';

export default function Buttons() {
  const [count, setCount] = useState(0);
  return <button onClick={setCount(count - 1)}>Down</button>;
}
