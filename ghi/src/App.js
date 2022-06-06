import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import PreferenceSelect from './components/Preferences';
import MainPage from './components/MainPage';
import CreateAccountForm from './components/SignUp';
import Logout from './components/Logout';
import LoginForm from './components/Login';
import Footer from './components/Footer';
import UserEventsParks from './components/userEventsParks';
import EventsParks from './components/EventsParks';


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
      <Route path="/userEventsParks" element={<UserEventsParks />} />
      <Route path="/EventsParks" element={<EventsParks />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
