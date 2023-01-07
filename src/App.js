
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegistrationForm from './components/RegistrationForm';
import Dashboard from './components/Dashboard';
import Protected from './components/Protected';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route element={<Protected />}>
          <Route path='/' element={<Dashboard />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/registrationFrom' element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
