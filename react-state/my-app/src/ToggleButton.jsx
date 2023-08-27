import { useState } from 'react';

export default function ToggleButton({ text, color }) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('useState', isClicked);
  const handleClick = () => {
    console.log('before setter', isClicked);
    setIsClicked(!isClicked);
    console.log('after setter', isClicked);
  };
  const backgroundChange = isClicked ? color : 'white';
  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: backgroundChange, color: 'black' }}>
      {text}
    </button>
  );
}
