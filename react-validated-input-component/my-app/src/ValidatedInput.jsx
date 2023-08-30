import { useState } from 'react';
import { FcCheckmark } from 'react-icons/fc';
import { FcCancel } from 'react-icons/fc';

export default function ValidatedInput({ underText, symbol }) {
  const [password, setPassword] = useState('');
  if (password.length > 0 && password.length < 8) {
    underText = 'Your password is too short.';
    symbol = <FcCancel />;
  } else if (password.length >= 8) {
    underText = '';
    symbol = <FcCheckmark />;
  }
  return (
    <div className="layout">
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      {symbol}
      <p
        style={{
          color: 'red',
        }}>
        {underText}
      </p>
    </div>
  );
}
