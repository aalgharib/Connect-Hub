import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../components/Login.module.css";
import background from "../assets/logo.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import auth from "./authHelper.js";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { signin } from "./apiAuth.js";

// import { useNavigate } from "react-router-dom";
// import PropTypes from "prop-types";
//I deleted porps from Login(props)
export default function Login() {
  
  // const naviagte = useNavigate();
  const location = useLocation();
  console.log(location.state);

  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    redirectToReferrer: false,
  });

  const clickSubmit = () => {
    const user = {
      email: values.email || undefined,
      password: values.password || undefined,
    };
    console.log(user);
    signin(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        console.log(data);
        auth.authenticate(data, () => {
          setValues({ ...values, error: "", redirectToReferrer: true });
        });
      }
    });
  };
  const { from } = location.state || {
    from: {
      pathname: "/Home/" + auth.isAuthenticated().user?._id,
    },
  };
  const { redirectToReferrer } = values;
  if (redirectToReferrer) {
    return (
      <Navigate
        to={from}
      />
    );
  }

  
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

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
              id="email"
              type="email"
              // className={classes.textField}
              value={values.email}
              onChange={handleChange("email")}
              margin="normal"
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
              id="password"
              type="password"
              // className={classes.textField}
              value={values.password}
              onChange={handleChange("password")}
              margin="normal"
              variant="standard"
              fullWidth
              placeholder="Password"
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
            {/* <Link to={"/Home/" + auth.isAuthenticated().user._id}> */}
            <Button
              variant="contained"
              color="primary"
              sx={{
                height: "1.8rem",
                width: "5rem",
                borderRadius: "12rem",
              }}
              onClick={clickSubmit}

              // className={classes.submit}
            >
              Login
            </Button>
            {/* </Link> */}
            <Typography sx={{ textAlign: "center" }}>
              Do not have an account?
              <Link to="/signup">{" Sign Up!"}</Link>
            </Typography>
          </Box>
        </Container>
      </div>
    </div>
  );
}
// export default Login;
