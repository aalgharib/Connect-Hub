import { useState, useEffect } from "react";
import Navbar from "../core/Navbar";
import auth from "../lib/authHelper.js";
import { read } from "./apiUser.js";
import { useLocation, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  const [user, setUser] = useState({});
  const [redirectToSignin, setRedirectToSignin] = useState(false);
  const jwt = auth.isAuthenticated();
  const { userId } = useParams();
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    read(
      {
        userId: userId,
      },
      { t: jwt.token },
      signal
    ).then((data) => {
      if (data && data.error) {
        setRedirectToSignin(true);
      } else {
        setUser(data);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, [userId]);

  if (redirectToSignin) {
    return (
      <Navigate to="/" state={{ from: location.pathname }} replace />
    );
  }
  if (auth.isAuthenticated()) {
    console.log(auth.isAuthenticated().user._id);
    console.log(user._id);
  }
  return (
    <div>
      <Navbar />
      profile
    </div>
  );
};

export default Profile;
