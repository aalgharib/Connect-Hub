import { Routes, Route } from "react-router-dom";
// import "./App.css";
import Signup from "./components/SignUp";
import Login from "./components/login";
import NoPage from "./components/NoPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
