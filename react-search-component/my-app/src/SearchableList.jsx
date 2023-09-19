import { useState } from 'react';
import './App.css';

export default function SearchableList({ list }) {
  return (
    <div>
      <Input item={list} />
    </div>
  );
}

function Input({ item }) {
  const [currentLetter, setCurrentLetter] = useState('');
  const resultItems = item
    .filter((result) => result.includes(currentLetter) || currentLetter === '')
    .map((result) => <li>{result}</li>);
  return (
    <div>
      <input
        name="input"
        value={currentLetter}
        onChange={(event) => setCurrentLetter(event.target.value)}></input>
      <ul>{resultItems}</ul>
    </div>
  );
}
