import { Routes, Route } from "react-router-dom";
// import "./App.css";
import SignUp from "../components/SignUp.jsx";
import Login from "../lib/Login.jsx";
import PrivateRoute from "../lib/PrivateRoute.jsx";
import NoPage from "../core/NoPage.jsx";
import Home from "../core/Home.jsx";
import Posts from "../components/Posts.jsx";
import Profile from "../components/Profile.jsx";
import Friends from "../components/Friends.jsx";
import EditProfile from "../components/EditProfile.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* this is a test router<Ali/> */}
        <Route path="/posts/" element={<Posts />} />
        <Route path="/Home/:userId" element={<Home />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/profile/:userId" element={<Profile />} />
        <Route
          path="/profile/edit/:userId"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />

        {/* use the above route when adding functionalities */}
        <Route path="/profile/edit" element={<EditProfile />} />
        {/* <Route path="/friends" element={<Friends />} /> */}
        <Route path="/friends/:userId" element={<Friends />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
