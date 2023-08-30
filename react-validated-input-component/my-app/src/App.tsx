import ValidatedInput from './ValidatedInput';
import { FcCancel } from 'react-icons/fc';
import './App.css';

function App() {
  return (
    <ValidatedInput underText="A password is required." symbol={<FcCancel />} />
  );
}

export default App;
