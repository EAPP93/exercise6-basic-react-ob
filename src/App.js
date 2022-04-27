import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Homepage from './pages/home/HomePage';
import Profilepage from './pages/profile/ProfilePage';
import Loginpage from './pages/auth/LoginPage';
import Registerpage from './pages/auth/RegisterPage';
import Notfound from './pages/404/NotFoundPage';
import Protectedroute from './components/pure/protectedRoute';

function App() {

  const [logged, setLogged] = useState(false);

  function verifyingCredentials(values){
    values.email === 'empireeapp@gmail.com' && values.password === 'pass' ? logger(true) : alert('datos incorrectos')
  }

  function logger(bolean) {
    setLogged(bolean)
  }

  useEffect(() => {
    console.log(`logged valor: ${logged}`)
  }, [logged]);

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
          <Route index element={<Homepage />} />
          <Route path="login" element={<Loginpage verifyingCredentials={ verifyingCredentials }/>} />
          <Route path="register" element={<Registerpage />} />
          <Route element={<Protectedroute logged ={logged} verifyingCredentials={ verifyingCredentials }/>}>
            <Route path="profile" element = {<Profilepage logged={logged} logger={logger}/>}/> 
          </Route>
          <Route path='*' element={<Notfound />} />
        </Routes>

      </main>
      
    </Router>
  );
}

export default App;
