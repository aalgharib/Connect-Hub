// import React from "react";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
// import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import AvatarImage from "../assets/avatar_sample.jpg";
import PostCard from "../components/PostCard";
// import { useState, useEffect } from "react";
// import auth from "../lib/authHelper.js";
// import { read } from "../components/apiUser.js";
// import { useLocation, Navigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { signout } from "./apiAuth.js";
// import { useNavigate } from "react-router";
// sample data for the posts
const samplePosts = [
  { id: 1, content: "Test1." },
  { id: 2, content: "Test2" },
  { id: 3, content: "Test3" },
];

const Home = () => {
//   const location = useLocation();
//   const [user, setUser] = useState({});
//   const [redirectToSignin, setRedirectToSignin] = useState(false);
//   const jwt = auth.isAuthenticated();
//   const { userId } = useParams();
//   // useEffect(() => {
//   //   const abortController = new AbortController();
//   //   const signal = abortController.signal;

//   //   read(
//   //     {
//   //       userId: userId,
//   //     },
//   //     { t: jwt.token },
//   //     signal
//   //   ).then((data) => {
//   //     if (data && data.error) {
//   //       setRedirectToSignin(true);
//   //     } else {
//   //       setUser(data);
//   //     }
//   //   });

//   //   return function cleanup() {
//   //     abortController.abort();
//   //   };
//   // }, [userId]);
// useEffect(() => {
//   let isMounted = true;
//   const abortController = new AbortController();
//   const signal = abortController.signal;
//   read({ userId: userId }, { t: jwt.token }, signal).then((data) => {
//     if (isMounted) {
//       if (data && data.error) {
//         setRedirectToSignin(true);
//       } else {
//         setUser(data);
//       }
//     }
//   });

//   return function cleanup() {
//     isMounted = false;
//     abortController.abort();
//   };
// }, [userId]);

//   if (redirectToSignin) {
//     return (
//       <Navigate to="/" state={{ from: location.pathname }} replace />
//     );
//   }
//   if (auth.isAuthenticated()) {
//     console.log(auth.isAuthenticated().user._id);
//     console.log(user._id);
//   }
  return (
    <div>
      <Navbar />
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flex: 1, bgcolor: "#9e9e9e", padding: 3 }}>
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
            <Typography variant="h6">user.name</Typography>
            <Typography variant="body2">user.email</Typography>
          </Box>
        </Box>
        {/* Use real data for the posts */}
        <Box sx={{ flex: 2, bgcolor: "#ffffff", padding: 3 }}>
          {samplePosts.map((post) => (
            <PostCard key={post.id} content={post.content} />
          ))}
          {/* I added this just for testing the sign out ^u^ <Ali/> */}
          {/* <Button
            variant="contained"
            color="primary"
            sx={{
              height: "1.8rem",
              width: "5rem",
              borderRadius: "12rem",
            }}
            onClick={() => {
              auth.clearJWT(() => navigate("/"));
            }}
          >
            Sign out
          </Button> */}
        </Box>
      </Box>
    </div>
  );
};

export default Home;
