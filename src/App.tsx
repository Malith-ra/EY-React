import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import './App.css';
import UsersPage from './pages/login/usersPage/UsersPage';
import UserDetailsPage from './pages/userDetailsPage/UserDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:id" element={<UserDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
