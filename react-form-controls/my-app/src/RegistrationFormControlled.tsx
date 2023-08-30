import { useState } from 'react';

export default function RegistrationFormControlled() {
  function handleSubmit(event) {
    event.preventDefault();
    console.log({ username, password });
  }
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form method="post" onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="submit">Sign up</button>
    </form>
  );
}
