import React from "react";
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

const SignUp = () => {
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
        <Typography>Create a Connect Hub Account</Typography>

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
              placeholder="First name"
              type="text"
              name="firstName"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        display: "flex",
                        alignItems: "center",
                        margin: "0 6px 0 6px",
                      }}
                    >
                      F
                    </span>
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
                  color: "#fff",
                },
              }}
            />
            <TextField
              variant="standard"
              fullWidth
              placeholder="Last name"
              type="text"
              name="lastName"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <span
                      style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        display: "flex",
                        alignItems: "center",
                        margin: "0 6px 0 6px",
                      }}
                    >
                      L
                    </span>
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
                  color: "#fff",
                },
              }}
            />
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
                  color: "#fff",
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
                  color: "#fff",
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
              Create
            </Button>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default SignUp;
