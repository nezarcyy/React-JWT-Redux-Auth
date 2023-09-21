import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard/dashboard';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Recovery from './pages/recovery';
import Newpass from './pages/newpassword';
import Activated from './pages/activated';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/reset-password' element={<Recovery />} />
        <Route path='/password/reset/confirm' element={<Newpass />} />
        <Route path='/activate' element={<Activated />} />
      </Routes>
    </Router>
  );
}

export default App;