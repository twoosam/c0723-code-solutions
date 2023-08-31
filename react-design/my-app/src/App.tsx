import RotatingBanner from './RotatingBanner';
import Buttons from './Buttons';
import './App.css';

const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

function App() {
  return (
    <div>
      <RotatingBanner items={items} />
      <Buttons />
    </div>
  );
}

export default App;
