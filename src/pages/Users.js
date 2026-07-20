import React, { useMemo, useState } from 'react';
import MainLayout from '../components/MainLayout';
import sampleUsers from '../data/sampleUsers';
import SearchBar from '../components/SearchBar';
import AddUserButton from '../components/AddUserButton';
import UsersTable from '../components/UsersTable';

function UsersPage() {
  const [users] = useState(sampleUsers);
  const [query, setQuery] = useState('');

  const filteredUsers = useMemo(() => {
    const q = (query || '').trim().toLowerCase();
    if (!q) return users;
    return users.filter((u) => u.name.toLowerCase().includes(q));
  }, [users, query]);

  const handleAdd = () => {
    // Placeholder: replace with modal or actual form in future
    window.alert('Create user (placeholder)');
  };

  return (
    <MainLayout title="Users">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <SearchBar value={query} onChange={setQuery} />
          <div style={{ color: '#6b7280' }}>{filteredUsers.length} result(s)</div>
        </div>
        <AddUserButton onAdd={handleAdd} />
      </div>

      <UsersTable users={filteredUsers} />
    </MainLayout>
  );
}

export default UsersPage;
