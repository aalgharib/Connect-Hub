import { useState, useEffect } from "react";
import Navbar from "../core/Navbar";
import auth from "../lib/authHelper.js";
import { read } from "./apiUser.js";
import { useLocation, Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import styles from "./Profile.module.css";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import DeleteUser from "./DeleteUser.jsx";

const Profile = () => {
  const location = useLocation();
  const [user, setUser] = useState({});
  const [redirectToSignin, setRedirectToSignin] = useState(false);
  const jwt = auth.isAuthenticated();
  const { userId } = useParams();
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    read(
      {
        userId: userId,
      },
      { t: jwt.token },
      signal
    ).then((data) => {
      if (data && data.error) {
        setRedirectToSignin(true);
      } else {
        setUser(data);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, [userId]);

  if (redirectToSignin) {
    return <Navigate to="/" state={{ from: location.pathname }} replace />;
  }
  if (auth.isAuthenticated()) {
    console.log(auth.isAuthenticated().user._id);
    console.log(user._id);
  }
  return (
    <div>
      <Navbar />
      <Paper className={styles.root} elevation={4}>
        <Typography variant="h6" className={styles.title}>
          Profile
        </Typography>
        <List dense>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={"test"} secondary={"test@test.com"} />{" "}
            {/* temp */}
            <ListItemSecondaryAction>
              <Link to={"/profile/edit"}>
                <IconButton aria-label="Edit" color="primary">
                  <EditIcon />
                </IconButton>
              </Link>
              <DeleteUser />
            </ListItemSecondaryAction>
            {/* Please implement the functionality here */}
            {/* {auth.isAuthenticated().user &&
              auth.isAuthenticated().user._id == user._id && (
                <ListItemSecondaryAction>
                  <Link to={"/user/edit/" + user._id}>
                    <IconButton aria-label="Edit" color="primary">
                      <EditIcon />
                    </IconButton>
                  </Link>
                  <DeleteUser userId={user._id} />
                </ListItemSecondaryAction>
              )} */}
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemText
              // primary={"Joined: " + new Date(user.created).toDateString()}
              primary={"joined"}
            />
          </ListItem>
        </List>
      </Paper>
    </div>
  );
};

export default Profile;
