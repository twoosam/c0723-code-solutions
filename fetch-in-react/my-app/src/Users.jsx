/* eslint-disable @typescript-eslint/no-unused-vars -- Remove me */
import { useEffect, useState } from 'react';
import UserDetails from './UserDetails';
import UserCard from './UserCard';
import './Users.css';

export default function Users() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState();

  /* your code here (hint: useEffect) */
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const usersList = await response.json(response);
        setUsers(usersList);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error || !users) {
    console.error('Fetch error:', error);
    return (
      <p>Error! {error instanceof Error ? error.message : 'Unknown Error'}</p>
    );
  }
  return (
    <div className="container">
      <UserList users={users} onClick={(user) => setUser(user)} />
      {user && (
        <UserDetails userId={user.id} onCancel={() => setUser(undefined)} />
      )}
    </div>
  );
}

function UserList({ users, onClick }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <UserCard user={user} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
}
