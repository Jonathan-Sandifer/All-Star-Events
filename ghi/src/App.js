import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './MainPage';
import CreateAccountForm from './components/SignUp';
import Logout from './components/Logout';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signup" element={<CreateAccountForm />} />
      <Route path="/logout" element={<Logout />} />
      </Routes>
      
     
    </BrowserRouter>
  );
}

export default App;
