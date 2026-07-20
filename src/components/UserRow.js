import React from 'react';

function statusStyle(status) {
  const s = (status || '').toLowerCase();
  if (s === 'active') return { color: '#065f46', background: '#bbf7d0' };
  if (s === 'inactive') return { color: '#6b7280', background: '#e5e7eb' };
  if (s === 'pending') return { color: '#92400e', background: '#ffd7a3' };
  return { color: '#111827', background: '#f3f4f6' };
}

function UserRow({ user }) {
  return (
    <tr>
      <td style={{ padding: '12px 8px' }}>{user.name}</td>
      <td style={{ padding: '12px 8px' }}>{user.email}</td>
      <td style={{ padding: '12px 8px' }}>{user.role}</td>
      <td style={{ padding: '12px 8px' }}>
        <span
          style={{
            padding: '6px 10px',
            borderRadius: 999,
            fontSize: 12,
            fontWeight: 600,
            ...statusStyle(user.status)
          }}
        >
          {user.status}
        </span>
      </td>
    </tr>
  );
}

export default UserRow;
