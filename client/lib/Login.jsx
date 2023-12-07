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
    return <Navigate to={from} />;
  }
  // const { from } = location.state || {
  //   from: {
  //     pathname: "/Home/",
  //   },
  // };
  // const { redirectToReferrer } = values;
  // if (redirectToReferrer) {
  //   return (
  //     <Navigate to={{ pathname: from, state: { userId: data.user._id } }} />
  //   );
  // }

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "550px 550px",
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
  };

  return (
    <div>
      <div style={backgroundStyle}>
        <Typography
          sx={{ marginTop: "2rem", marginBottom: "2rem", fontWeight: "bold" }}
        >
          Login to Connect Hub
        </Typography>

        {/* Form */}
        <Container className={styles.containerLogin}>
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
              value={values.email}
              onChange={handleChange("email")}
              variant="standard"
              fullWidth
              placeholder="Email ID"
              name="email"
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{ background: "#aed8e6", height: "100%" }}
                  >
                    <AccountCircle />
                  </InputAdornment>
                ),
                disableUnderline: true,
              }}
              sx={{
                backgroundColor: "#005aaa",
                // borderRadius: "4px",
                input: {
                  color: "#fff",
                },
                margin: "5px 0 5px 0",
              }}
              InputLabelProps={{
                sx: {
                  color: "#fff",
                },
              }}
            />
            <TextField
              id="password"
              type="password"
              value={values.password}
              onChange={handleChange("password")}
              variant="standard"
              fullWidth
              placeholder="Password"
              name="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    position="start"
                    sx={{ background: "#aed8e6", height: "100%" }}
                  >
                    <LockIcon />
                  </InputAdornment>
                ),
                disableUnderline: true,
              }}
              sx={{
                backgroundColor: "#005aaa",
                // borderRadius: "4px",
                input: {
                  color: "#fff",
                },
                margin: "5px 0 5px 0",
              }}
              InputLabelProps={{
                sx: {
                  color: "#fff",
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
                margin: "5px 0 5px 0",
              }}
              onClick={clickSubmit}

              // className={classes.submit}
            >
              Login
            </Button>
            {/* </Link> */}
            <Typography sx={{ textAlign: "center", margin: "5px 0 5px 0" }}>
              Do not have an account?
              <Link to="/signup">{" Sign Up!"}</Link>
            </Typography>
          </Box>
        </Container>
        <Box className={styles.bottomLogo}>
          <Typography sx={{ fontSize: "0.6rem", fontWeight: "bold" }}>
            Powered By:
          </Typography>
          <Typography sx={{ fontSize: "0.6rem" }}>{"</>"}</Typography>
          <Typography sx={{ fontSize: "0.6rem", fontWeight: "bold" }}>
            NodeNinjas
          </Typography>
          <Typography sx={{ fontSize: "0.5rem" }}>Est.2023</Typography>
        </Box>
      </div>
    </div>
  );
}
// export default Login;
