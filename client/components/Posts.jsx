// import { useEffect, useState } from "react";
import React from "react";
import Navbar from "../core/Navbar";
import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import AvatarImage from "../assets/avatar_sample.jpg";
import PostCard from "./PostCard";
// import { useState, useEffect } from "react";
// import auth from "../lib/authHelper.js";
// import { read } from "../components/apiUser.js";
// import { Navigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { signout } from "./apiAuth.js";
// import { useNavigate } from "react-router";
import { useLocation } from "react-router";
// sample data for the posts
const samplePosts = [
  { id: 1, content: "Test1." },
  { id: 2, content: "Test2" },
  { id: 3, content: "Test3" },
];

const Posts = () => {
  
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
            {/* <Typography variant="h6">
              {user && user.name ? user.name : "Name not available"}
            </Typography>
            <Typography variant="body2">
              {user && user.email ? user.email : "Email not available"}
            </Typography> */}
          </Box>
        </Box>
        {/* Use real data for the posts */}
        <Box sx={{ flex: 2, bgcolor: "#ffffff", padding: 3 }}>
          {samplePosts.map((post) => (
            <PostCard key={post.id} content={post.content} />
          ))}
        </Box>
      </Box>
    </div>
  );
};

export default Posts;
