import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/login/Login';
import UsersPage from './pages/usersPage/UsersPage';
import UserDetailsPage from './pages/userDetailsPage/UserDetailsPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetailsPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
