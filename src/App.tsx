import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import LoginForm from './components/LoginForm/loginForm'
import Users from './users/page'

function App() {

  return (
    <>
      {/* <LoginForm /> */}
      <BrowserRouter>
      
      <Routes>
        <Route path="/users" element={<Users/>}></Route>
        <Route path='/users:id' > </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
