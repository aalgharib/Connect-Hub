import { useState}  from "react";
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
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import { registerUser } from "./apiUser";
import { Navigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import { useHistory } from "react-router-dom";
const SignUp = () => {
  // const history = useHistory();
  // const { userId } = useParams();
  const [values, setValues] = useState({
    name: "",
    password: "",
    email: "",
    redirectToProfile: false,
    error: "",
  });

  // const [open, setOpen] = useState(false);

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const clickSubmit = () => {
    const user = {
      name: values.name || undefined,
      email: values.email || undefined,
      password: values.password || undefined,
    };

    registerUser(user).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, error: "", redirectToProfile: true });
        // setOpen(true);
        // history.push("/profile");
        // return <Navigate to={"/Home/"} />;
        // Navigate("/profile/" + values.userId);
      //  <Navigate to={"/profile/" + values.userId} />;
      }
    });
  };
if (values.redirectToProfile) {
  return <Navigate to="/Home" />;
}
  // SignUp.propTypes = {
  //   open: PropTypes.bool.isRequired,
  //   handleClose: PropTypes.func.isRequired,
  // };

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
// if (values.redirectToProfile) {
//   return <Navigate to={"/Home/" + values.userId} />;
// }
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
              id="name"
              value={values.name}
              onChange={handleChange("name")}
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
              id="email"
              value={values.email}
              onChange={handleChange("email")}
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
              id="password"
              value={values.password}
              onChange={handleChange("password")}
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
              onClick={clickSubmit}
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
            <Typography>
              Already have an account? <Link to="/">Sign In</Link>
            </Typography>
          </Box>
        </Container>
      </div>
    </div>
  );
};

export default SignUp;
