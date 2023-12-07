import Navbar from "../core/Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import AvatarImage from "../assets/avatar_sample.jpg";
import FriendsCard from "./FriendsCard";
import auth from "../lib/authHelper.js";
import { read } from "./apiUser.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
const sampleFriends = [
  { id: 1, name: "Name 1" },
  { id: 2, name: "Name 2" },
  { id: 3, name: "Name 3" },
];

const Friends = () => {
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
        console.log("error");
        setRedirectToSignin(true);
      } else {
        console.log("Okay");
        setUser(data);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);
  console.log("whatever-------------");
  console.log(userId);
  console.log("whatever-------------");
  console.log(jwt.token);
  if (redirectToSignin) {
    return <Navigate to="/" state={{ from: location.pathname }} replace />;
  }
  if (auth.isAuthenticated()) {
    console.log(auth.isAuthenticated().userId);
    console.log(userId);
  }
  return (
    <div>
      <Navbar />
      <Box sx={{ display: "flex", height: `calc(100vh - ${60}px)` }}>
        <Box sx={{ flex: 1, bgcolor: "#9e9e9e", padding: 3, height: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            {/* Use image relating to the user and data */}
            <Avatar
              sx={{ width: 100, height: 100 }}
              alt="avatar image"
              src={AvatarImage}
            />
            <Typography variant="h6">
              {user && user.name ? user.name : "Name not available"}
            </Typography>
            <Typography variant="body2">
              {user && user.email ? user.email : "Email not available"}
            </Typography>
          </Box>
        </Box>
        {/* Use real data for the posts */}
        <Box sx={{ flex: 2, bgcolor: "#ffffff", padding: 3 }}>
          {sampleFriends.map((friend) => (
            <FriendsCard key={friend.id} content={friend.name} />
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default Friends;
