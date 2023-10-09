import { useState } from 'react';

function Banner({ item }) {
  return <div>{item}</div>;
}

function PrevButton({ current, onSelect }) {
  return <button onClick={() => onSelect(current - 1)}>Prev</button>;
}

function NumButtons({ count, current, onSelect }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button
        style={{ backgroundColor: current === i ? 'lightblue' : undefined }}
        onClick={() => onSelect(i)}>
        {i}
      </button>
    );
  }
  return <div>{buttons}</div>;
}
function NextButton({ current, onSelect }) {
  return <button onClick={() => onSelect(current + 1)}>Next</button>;
}

export default function RotatingBanner({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div>
      <Banner item={items[currentIndex]} />
      <PrevButton current={currentIndex} onSelect={(i) => setCurrentIndex(i)} />
      <NumButtons
        count={items.length}
        current={currentIndex}
        onSelect={(i) => setCurrentIndex(i)}
      />
      <NextButton current={currentIndex} onSelect={(i) => setCurrentIndex(i)} />
    </div>
  );
}
