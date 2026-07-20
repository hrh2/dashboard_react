import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const linkStyle = ({ isActive }) => ({
    display: 'block',
    padding: '10px 14px',
    color: isActive ? '#fff' : '#374151',
    background: isActive ? '#2563eb' : 'transparent',
    textDecoration: 'none',
    borderRadius: 6,
    marginBottom: 6
  });

  return (
    <aside style={{ width: 220, padding: 16, borderRight: '1px solid #e5e7eb', height: '100vh', boxSizing: 'border-box' }}>
      <div style={{ marginBottom: 24, fontWeight: 700 }}>Dashboard</div>
      <nav>
        <NavLink to="/" style={linkStyle} end>
          Home
        </NavLink>
        <NavLink to="/users" style={linkStyle}>
          Users
        </NavLink>
        <NavLink to="/settings" style={linkStyle}>
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
