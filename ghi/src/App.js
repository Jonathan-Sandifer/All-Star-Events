import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import SignUp from './components/SignUp';
import PreferenceSelect from "./components/Preferences";
import MainPage from "./components/MainPage";
import CreateAccountForm from "./components/SignUp";
import Logout from "./components/Logout";
import LoginForm from "./components/Login";
import Footer from "./components/Footer";
import UserEventsParks from "./components/userEventsParks";
import EventsParks from "./components/EventsParks";
import { useToken } from "./api";
import { useState } from "react";

function App() {
  const [token, logout, signup, login] = useToken();
  const [searchData, setSearchData] = useState({});

  let getSearchData = function (data) {
    setSearchData(data);
  };

  return (
    <BrowserRouter>
      <Navbar token={token} />
      <Routes>
        <Route
          path="/*"
          element={<MainPage sSearchData={getSearchData} token={token} />}
        />
        <Route
          path="/preferences"
          element={<PreferenceSelect token={token} />}
        />
        <Route
          path="/signup"
          element={<CreateAccountForm signup={signup} token={token} />}
        />
        <Route path="/logout" element={<Logout logout={logout} />} />
        <Route
          path="/login"
          element={<LoginForm login={login} token={token} />}
        />
        <Route path="/userEventsParks" element={<UserEventsParks token={token}/>}  />
        <Route
          path="/EventsParks"
          element={<EventsParks sData={searchData} token={token} />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
