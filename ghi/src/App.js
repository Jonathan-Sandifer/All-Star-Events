import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import PreferenceSelect from './components/Preferences';
import MainPage from './components/MainPage';
import CreateAccountForm from './components/SignUp';
import Logout from './components/Logout';
import LoginForm from './components/Login';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/preferences" element={<PreferenceSelect />} />
      <Route path="/signup" element={<CreateAccountForm />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/login" element={<LoginForm />} />
      </Routes>
      
     
    </BrowserRouter>
  );
}

export default App;
