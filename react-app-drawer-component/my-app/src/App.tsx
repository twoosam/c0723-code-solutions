import AppDrawer from './AppDrawer';
import './App.css';
import { useState } from 'react';

const list = [
  'The Legend of Zelda',
  'A Link to the Past',
  'Ocarina of Time',
  'The Wind Waker',
  'Breath of the Wild',
];

function App() {
  const [item, setItem] = useState('No menu selected');
  return (
    <div>
      <AppDrawer list={list} onSelect={setItem} />
      <h1>{item}</h1>
    </div>
  );
}

export default App;
