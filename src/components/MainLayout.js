import React from 'react';
import Sidebar from './Sidebar';

function MainLayout({ children, title }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: 24, background: '#ffffff' }}>
        {title && (
          <header style={{ marginBottom: 18 }}>
            <h1 style={{ margin: 0, fontSize: 20 }}>{title}</h1>
          </header>
        )}
        <div>{children}</div>
      </main>
    </div>
  );
}

export default MainLayout;
