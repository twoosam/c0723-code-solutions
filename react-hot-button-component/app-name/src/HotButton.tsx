import { useState } from 'react';

type Prop = {
  color: string;
};

export default function HotButton({ color }: Prop) {
  const [count, setCount] = useState(0);
  let backgroundColor;
  if (count < 3) {
    backgroundColor = color;
  } else if (count < 6) {
    backgroundColor = 'rgb(53,28,117)';
  } else if (count < 9) {
    backgroundColor = 'rgb(103,78,167)';
  } else if (count < 12) {
    backgroundColor = 'rgb(224,102,102)';
  } else if (count < 15) {
    backgroundColor = 'rgb(246,178,107)';
  } else if (count < 18) {
    backgroundColor = 'rgb(255,255,0)';
  } else if (count >= 18) {
    backgroundColor = 'rgb(255,255,255)';
  }
  return (
    <button
      onClick={() => setCount(count + 1)}
      style={{ backgroundColor: backgroundColor }}>
      Hot Button {count}
    </button>
  );
}
