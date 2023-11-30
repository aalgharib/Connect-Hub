// import React from "react";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import AvatarImage from "../assets/avatar_sample.jpg";
import PostCard from "../components/PostCard";
import auth from "../lib/authHelper.js";
// import { signout } from "./apiAuth.js";
import { useNavigate } from "react-router";
// sample data for the posts
const samplePosts = [
  { id: 1, content: "Test1." },
  { id: 2, content: "Test2" },
  { id: 3, content: "Test3" },
];

const Home = () => {
  const navigate = useNavigate();
 
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
            <Typography variant="h6">Andrew Garfield</Typography>
            <Typography variant="body2">2nd@gmail.com</Typography>
          </Box>
        </Box>
        {/* Use real data for the posts */}
        <Box sx={{ flex: 2, bgcolor: "#ffffff", padding: 3 }}>
          {samplePosts.map((post) => (
            <PostCard key={post.id} content={post.content} />
          ))}
      {/* I added this just for testing the sign out ^u^ <Ali/> */}
          <Button
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
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Home;