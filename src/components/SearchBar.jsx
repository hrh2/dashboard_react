import React from 'react';

function SearchBar({ value, onChange, placeholder = 'Search by name...' }) {
  return (
    <input
      type="search"
      aria-label="Search users by name"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        padding: '8px 12px',
        borderRadius: 6,
        border: '1px solid #ccc',
        minWidth: 240
      }}
    />
  );
}

export default SearchBar;
