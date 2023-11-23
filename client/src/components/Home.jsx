import React from "react";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import AvatarImage from "../assets/avatar_sample.jpg";
import PostCard from "./PostCard";

// sample data for the posts
const samplePosts = [
  { content: "Test1." },
  { content: "Test2" },
  { content: "Test3" },
];

const Home = () => {
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
            <PostCard content={post.content} />
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default Home;
