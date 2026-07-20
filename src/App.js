import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UsersPage from './pages/Users';
import MainLayout from './components/MainLayout';

function Home() {
  return (
    <MainLayout title="Home">
      <div style={{ padding: 8 }}>
        <p>Welcome to the dashboard. Use the sidebar to navigate.</p>
        <p>
          Quick links: <Link to="/users">Users</Link>
        </p>
      </div>
    </MainLayout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UsersPage />} />
        {/* Add other routes here as needed. */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
