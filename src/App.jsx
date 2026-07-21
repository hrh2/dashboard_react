import "./App.css";
import Sidebar from "./layout/Sidebar/Sidebar";
import Content from "./layout/Content/Content";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UsersPage from './pages/Users';

function Home() {
  return (
    <div className="app">
      <Sidebar />
      <Content />
    </div>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UsersPage />} />
          {/* Add other routes here as needed. */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
