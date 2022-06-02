import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
<<<<<<< HEAD
import MainPage from './MainPage';
import SignUp from './components/SignUp';
import PreferenceSelect from './components/Preferences';
=======
import MainPage from './components/MainPage';
import CreateAccountForm from './components/SignUp';
import LoginForm from './components/Login';

>>>>>>> main

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<MainPage />} />
<<<<<<< HEAD
      <Route path="/signup" element={<SignUp />} />
      <Route path="/preferences" element={<PreferenceSelect />} />
=======
      <Route path="/signup" element={<CreateAccountForm />} />
      <Route path="/login" element={<LoginForm />} />
>>>>>>> main
      </Routes>
      
     
    </BrowserRouter>
  );
}

export default App;
