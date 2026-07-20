import React from 'react';
import UserRow from './UserRow';

function UsersTable({ users = [] }) {
  return (
    <div style={{ overflowX: 'auto', borderRadius: 6, border: '1px solid #e5e7eb' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead style={{ background: '#f9fafb', textAlign: 'left' }}>
          <tr>
            <th style={{ padding: '12px 8px', fontSize: 13, color: '#374151' }}>Name</th>
            <th style={{ padding: '12px 8px', fontSize: 13, color: '#374151' }}>Email</th>
            <th style={{ padding: '12px 8px', fontSize: 13, color: '#374151' }}>Role</th>
            <th style={{ padding: '12px 8px', fontSize: 13, color: '#374151' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan={4} style={{ padding: 20, textAlign: 'center', color: '#6b7280' }}>
                No users found.
              </td>
            </tr>
          ) : (
            users.map((u) => <UserRow key={u.id} user={u} />)
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
