import { useState } from 'react';
import EntryForm from './EntryForm';
import EntryList, { Entry } from './EntryList';
import { NavBar, PageType } from './NavBar';
import RegistrationForm from './RegistrationForm';
import './App.css';

export default function App() {
  /* The current page being displayed:
   * 'journal' - A Code Journal page based on the state of `editing`
   * 'register' - The registration page
   */
  const [page, setPage] = useState<PageType>('register');

  /* What is being currently edited:
   * undefined - nothing, display entries
   * null - creating a new entry
   * defined - the entry being edited
   */
  const [editing, setEditing] = useState<Entry | null | undefined>();

  function handleNavigate(page: PageType) {
    setPage(page);
    if (page === 'journal') {
      setEditing(undefined);
    }
  }

  return (
    <>
      <NavBar onNavigate={handleNavigate} />
      {page === 'journal' && editing !== undefined && (
        <EntryForm entry={editing} onSubmit={() => setEditing(undefined)} />
      )}
      {page === 'journal' && editing === undefined && (
        <EntryList
          onCreate={() => setEditing(null)}
          onEdit={(entry) => setEditing(entry)}
        />
      )}
      {page === 'register' && <RegistrationForm />}
    </>
  );
}
