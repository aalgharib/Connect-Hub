import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import background from "../assets/logo.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";

const Login = () => {
  // Back ground logo style
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div>
      <div style={backgroundStyle}>
        <Typography>Login to Connect Hub</Typography>

        {/* Form */}
        <Container className={styles.container}>
          <Box
            className={styles.transparentBoxBackground}
            sx={{
              p: 2,
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              height: "100%",
            }}
          >
            <TextField
              variant="standard"
              fullWidth
              placeholder="Email ID"
              name="email"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
                disableUnderline: true,
              }}
              sx={{
                backgroundColor: "#005aaa",
                borderRadius: "4px",
                input: {
                  color: "#fff",
                },
              }}
              InputLabelProps={{
                sx: {
                  color: "#fff", // Replace with your desired color
                  // Add additional styles if needed
                },
              }}
            />
            <TextField
              variant="standard"
              fullWidth
              placeholder="Password"
              type="password"
              name="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
                disableUnderline: true,
              }}
              sx={{
                backgroundColor: "#005aaa",
                borderRadius: "4px",
                input: {
                  color: "#fff",
                },
              }}
              InputLabelProps={{
                sx: {
                  color: "#fff", // Replace with your desired color
                  // Add additional styles if needed
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{
                height: "1.8rem",
                width: "5rem",
                borderRadius: "12rem",
              }}
            >
              Login
            </Button>
            <Typography sx={{ textAlign: "center" }}>
              Don't have an account?
              <Link to="/signup">{" Sign Up!"}</Link>
            </Typography>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default Login;
