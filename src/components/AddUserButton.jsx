import React from 'react';

function AddUserButton({ onAdd }) {
  const handleClick = () => {
    if (onAdd) onAdd();
    else window.alert('Add user placeholder');
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{
        backgroundColor: '#2563eb',
        color: 'white',
        padding: '8px 14px',
        borderRadius: 6,
        border: 'none',
        cursor: 'pointer'
      }}
    >
      + Add User
    </button>
  );
}

export default AddUserButton;
