import { Routes, Route } from "react-router-dom";
import "./App.css";
import Signin from "./components/Signin";
import Login from "./components/login";
import NoPage from "./components/NoPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
