import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import SignUp from './components/SignUp';
import PreferenceSelect from './components/Preferences';
import MainPage from './components/MainPage';
import CreateAccountForm from './components/SignUp';
import Logout from './components/Logout';
import LoginForm from './components/Login';
import Footer from './components/Footer';
import UserEventsParks from './components/userEventsParks';
import EventsParks from './components/EventsParks';
import { useToken } from './api';


function App() {
  const [token, logout, signup, login] = useToken();
  return (
    <BrowserRouter>
      <Navbar token={token} />
      <Routes>
      <Route path="/" element={<MainPage />} />
      {/* <Route path="/signup" element={<SignUp signup={signup} />} /> */}
      <Route path="/preferences" element={<PreferenceSelect />} />
      <Route path="/signup" element={<CreateAccountForm signup={signup} token={token} />} />
      <Route path="/logout" element={<Logout logout={logout} />} />
      <Route path="/login" element={<LoginForm login={login} token={token} />} />
      <Route path="/userEventsParks" element={<UserEventsParks />} />
      <Route path="/EventsParks" element={<EventsParks />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
