import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './MainPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <MainPage />
      
    </BrowserRouter>
  );
}

export default App;
