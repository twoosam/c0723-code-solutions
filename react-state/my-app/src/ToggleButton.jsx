import { useState } from 'react';

export default function ToggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('useState', isClicked);
  const handleClick = () => {
    console.log('before setter', isClicked);
    setIsClicked(!isClicked);
    console.log('after setter', isClicked);
  };
  if (isClicked) {
    return (
      <button
        onClick={handleClick}
        style={{ backgroundColor: color, color: 'black' }}>
        {text}
      </button>
    );
  }
  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: 'white', color: 'black' }}>
      {text}
    </button>
  );
}
