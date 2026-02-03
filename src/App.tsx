import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/login/Login';
import UsersPage from './pages/usersPage/UsersPage';
import UserDetailsPage from './pages/userDetailsPage/UserDetailsPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ default route */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetailsPage />} />

        {/* ✅ fallback route */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
