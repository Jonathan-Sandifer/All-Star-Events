import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './MainPage';
import SignUp from './components/SignUp';
import PreferenceSelect from './components/Preferences';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/preferences" element={<PreferenceSelect />} />
      </Routes>
      
     
    </BrowserRouter>
  );
}

export default App;
