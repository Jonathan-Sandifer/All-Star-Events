import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
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

  const domain = /https:\/\/[^/]+/;
  const basename = process.env.PUBLIC_URL.replace(domain, '');
  return (
    <BrowserRouter basename={basename}>
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
        <Route
          path="/userEventsParks"
          element={<UserEventsParks token={token} />}
        />
        <Route
          path="/EventsParks"
          element={<EventsParks sData={searchData} token={token} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
