import { useState, useEffect } from "react";
import Navbar from "../core/Navbar";
import { Navigate } from "react-router-dom";
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
import auth from "../lib/authHelper.js";
import { read } from "./apiUser.js";
import { useParams } from "react-router-dom";

const Profile = () => {
  // const location = useLocation();
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
        console.log("error");
        setRedirectToSignin(true);
      } else {
        console.log("Okay");
        setUser(data);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);
  console.log("whatever-------------");
  console.log(userId);
  console.log("whatever-------------");
  console.log(jwt.token);
  if (redirectToSignin) {
    return <Navigate to="/" state={{ from: location.pathname }} replace />;
  }
  if (auth.isAuthenticated()) {
    console.log(auth.isAuthenticated().userId);
    console.log(userId);
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
            <ListItemText
              primary={user && user.name ? user.name : "Name not available"}
              secondary={
                user && user.email ? user.email : "Email not available"
              }
            />{" "}
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
            {auth.isAuthenticated().user &&
              auth.isAuthenticated().userId == userId && (
                // <ListItemSecondaryAction>
                //   <Link to={"/profile/edit/" + auth.isAuthenticated().userId}>
                //     <IconButton aria-label="Edit" color="primary">
                //       <EditIcon />
                //     </IconButton>
                //   </Link>
                //   <DeleteUser userId={auth.isAuthenticated().userId} />
                // </ListItemSecondaryAction>
                <ListItemSecondaryAction>
                  <Link to={"/profile/edit/" + userId}>
                    <IconButton aria-label="Edit" color="primary">
                      <EditIcon />
                    </IconButton>
                  </Link>
                  <DeleteUser userId={userId} />
                </ListItemSecondaryAction>
              )}
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
