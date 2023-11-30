import { Routes, Route } from "react-router-dom";
// import "./App.css";
import SignUp from "../components/SignUp.jsx";
import Login from "../lib/Login.jsx";
import NoPage from "../core/NoPage.jsx";
import Home from "../core/Home.jsx";
import Profile from "../components/Profile.jsx";
import Friends from "../components/Friends.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
