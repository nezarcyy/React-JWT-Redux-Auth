import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard/dashboard';
import Login from './pages/login';
import Signup from './pages/signup';
import Recovery from './pages/recovery';
import Newpass from './pages/newpassword';
import Activated from './pages/activated';
import { Provider } from 'react-redux';
import store from './stores/store';



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/reset-password' element={<Recovery />} />
          <Route exact path='/password/reset/confirm/:uid/:token' element={<Newpass />} />
          <Route exact path='/activate/:uid/:token' element={<Activated />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;