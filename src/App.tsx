import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Users from './users/page';
import Login from './pages/login/Login';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/users:id"> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
