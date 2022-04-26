import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from 'react-router-dom'
import Homepage from './pages/home/HomePage';
import Profilepage from './pages/profile/ProfilePage';
import Loginpage from './pages/auth/LoginPage';
import Registerpage from './pages/auth/RegisterPage';
import Notfound from './pages/404/NotFoundPage';


function App() {


  const [logged, setLogged] = useState(false);

  function logger(bol) {
    setLogged(bol)
  }

  return (
    <Router>
      <header>
        <h2>nav menu</h2>
        <nav>
          <Link to='/' > Home </Link>
          <Link to='login' > Login </Link>
          <Link to='register' > Register </Link>
          <Link to='profile' > Profile </Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/profile" element = { (logged) => {logged ? <Navigate to={(<Profilepage/>)} />: <Navigate to='/' /> }}/> 
          <Route path='*' element={<Notfound />} />
        </Routes>
      </main>
      
    </Router>
  );
}

export default App;
