import { useEffect, useState } from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaCircle,
  FaRegCircle,
} from 'react-icons/fa';
import './App.css';

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);
    return () => clearTimeout(timerId);
  }, [currentIndex, images.length]);

  return (
    <div className="box">
      <div className="row">
        <PrevButton
          onSelect={() =>
            setCurrentIndex((currentIndex - 1 + images.length) % images.length)
          }
        />
        <Banner image={images[currentIndex]} />
        <NextButton
          onSelect={() => setCurrentIndex((currentIndex + 1) % images.length)}
        />
      </div>
      <Indicators
        count={images.length}
        current={currentIndex}
        onSelect={(i) => setCurrentIndex(i)}
      />
    </div>
  );
}

function Banner({ image }) {
  return (
    <div>
      <img src={`/images/${image}.png`} alt={image} className="img" />
    </div>
  );
}

function PrevButton({ onSelect }) {
  return <FaChevronLeft onClick={onSelect} className="arrow" />;
}

function NextButton({ onSelect }) {
  return <FaChevronRight onClick={onSelect} className="arrow" />;
}

function Indicators({ count, current, onSelect }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    if (i === current) {
      buttons.push(
        <FaCircle onClick={() => onSelect(i)} className="circles" />
      );
    } else {
      buttons.push(
        <FaRegCircle onClick={() => onSelect(i)} className="circles" />
      );
    }
  }
  return <div>{buttons}</div>;
}
