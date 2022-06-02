import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './MainPage';
import CreateAccountForm from './components/SignUp';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signup" element={<CreateAccountForm />} />
      </Routes>
      
     
    </BrowserRouter>
  );
}

export default App;
