import { useState } from "react";
import Navbar from "../core/Navbar";
import styles from "./EditProfile.module.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import TextField from "@mui/material/TextField";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Navigate , useParams } from "react-router";
import auth  from "../lib/authHelper";
// import { useParams } from "react-router";
import {  useEffect } from "react";
import { update , read } from "./apiUser"
const EditProfile = ({ match }) => {
  const { userId } = useParams();
  // const location = useLocation();
  const [user, setUser] = useState({});
  const [redirectToSignin, setRedirectToSignin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [values, setValues] = useState({
    name: "",
    password: "",
    email: "",
    open: false,
    error: "",
    redirectToProfile: false,
  }) 
  const jwt = auth.isAuthenticated()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await read({ userId }, { t: jwt.token });

        if (data.error) {
          setRedirectToSignin(true);
        } else {
          setUser(data);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setRedirectToSignin(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId, jwt.token]);

  if (redirectToSignin) {
    return <Navigate to="/Home" state={{ from: location.pathname }} replace />;
  }

  if (loading) {
    return <p>Loading...</p>;
  }
  const clickSubmit = () => {
    const user = {
      name: values.name || undefined,
      email: values.email || undefined,
      password: values.password || undefined,
    };
    update(
      {
        userId: userId,
      },
      {
        t: jwt.token,
      },
      user
    ).then((data) => {
      if (data && data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, userId: data._id, redirectToProfile: true });
      }
    });
  };
  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  if (values.redirectToProfile) {
    return <Navigate to={"/user/" + values.userId} />;
  }
  return (
    <div>
      <Navbar />
      <Card className={styles.card}>
        <CardContent>
          <Typography variant="h6" className={styles.title}>
            Edit Profile
          </Typography>
          <TextField
            id="name"
            label="Name"
            className={styles.textField}
            value={values.name}
            onChange={handleChange("name")}
            margin="normal"
          />
          <br />
          <TextField
            id="email"
            type="email"
            label="Email"
            className={styles.textField}
            value={values.email}
            onChange={handleChange("email")}
            margin="normal"
          />
          <br />
          <TextField
            id="password"
            type="password"
            label="Password"
            className={styles.textField}
            value={values.password}
            onChange={handleChange("password")}
            margin="normal"
          />
          <br />{" "}
          {values.error && (
            <Typography component="p" color="error">
              <Icon color="error" className={styles.error}>
                error
              </Icon>
              {values.error}
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            onClick={clickSubmit}
            className={styles.submit}
          >
            Update
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default EditProfile;
