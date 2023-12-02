import { useState, useEffect } from "react";
import Navbar from "../core/Navbar";
import { useLocation, Navigate } from "react-router-dom";
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
// import ErrorBoundary from "../src/ErrorBoundary.jsx";
const Profile = () => {
  const location = useLocation();
  const [user, setUser] = useState({});
  const [redirectToSignin, setRedirectToSignin] = useState(false);
  const jwt = auth.isAuthenticated();
  const { userId } = useParams();
  

  useEffect(() => {
  //   const abortController = new AbortController();
  //   const signal = abortController.signal;
  //   if (userId) {
  //     read(
  //       {
  //         userId: userId,
  //       },
  //       { t: jwt.token },
  //       signal
  //     ).then((data) => {
  //       if (data && data.error) {
  //         setRedirectToSignin(true);
  //       } else {
  //         setUser(data);
  //       }
  //     });
  //   }
  //   console.log("user id : " + (userId))

  //   return function cleanup() {
  //     abortController.abort();
  //   };
  // }, [userId, jwt.token]);
    const abortController = new AbortController();
    const signal = abortController.signal;
    
    read(
      {
        userId : userId,
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
// const abortController = new AbortController();
// const signal = abortController.signal;
// console.log("whatever");
// console.log(userId);
// console.log(jwt.token);
// read(
//   {
//     userId: userId,
//   },
//   { t: jwt.token },
//   signal
// ).then((data) => {
//   if (data && data.error) {
//     setRedirectToSignin(true);
//   } else {
//     setUser(data);
//   }
// });

// return function cleanup() {
//   abortController.abort();
// };

  // if (redirectToSignin) {
  //   console.log("redirect");
  //   return <Navigate to="/" state={{ from: location.pathname }} replace />;
  // }
  //  if (auth.isAuthenticated()) {
    
  //    console.log(auth.isAuthenticated().user._id);
  //    console.log(user._id);
  //    console.log("auth userId")
  //  }
  // const location = useLocation();
  // const [user, setUser] = useState({});
  // const [redirectToSignin, setRedirectToSignin] = useState(false);
  // const jwt = auth.isAuthenticated();
  // const { userId } = useParams();
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await read({ userId }, { t: jwt.token });

  //       if (data.error) {
  //         setRedirectToSignin(true);
  //       } else {
  //         setUser(data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //       setRedirectToSignin(true);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [userId, jwt.token]);

  // if (redirectToSignin) {
  //   return <Navigate to="/Home" state={{ from: location.pathname }} replace />;
  // }

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // useEffect(() => {
  //   const abortController = new AbortController();
  //   const signal = abortController.signal;
  //   read(
  //     {
  //       userId: userId,
  //     },
  //     { t: jwt.token },
  //     signal
  //   ).then((data) => {
  //     if (data && data.error) {
  //       setRedirectToSignin(true);
  //     } else {
  //       setUser(data);
  //     }

  //   });

  //   return function cleanup() {
  //     abortController.abort();
  //   };
  // }, [userId]);

  // if (redirectToSignin) {
  //   return <Navigate to="/" state={{ from: location.pathname }} replace />;
  // }
  // if (auth.isAuthenticated()) {
  //   console.log(auth.isAuthenticated().user._id);
  //   console.log(user._id);
  // }
  // useEffect(() => {
  //   const abortController = new AbortController();
  //   const signal = abortController.signal;

  //   const fetchData = async () => {
  //     try {
  //       const data = await read({ userId: userId }, { t: jwt.token }, signal);

  //       if (data && data.error) {
  //         setRedirectToSignin(true);
  //       } else {
  //         setUser(data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //       // Handle error, e.g., setRedirectToSignin(true);
  //     }
  //   };

  //   fetchData();

  //   return function cleanup() {
  //     abortController.abort();
  //   };
  // }, [userId, jwt.token]);

  // if (redirectToSignin) {
  //   return <Navigate to="/" state={{ from: location.pathname }} replace />;
  // }
  // if (auth.isAuthenticated()) {
  //   console.log(auth.isAuthenticated().user._id);
  //   console.log(user._id);
  // }
  // Make sure user is defined before accessing properties
  // if (!user || !user._id) {
  //   // Handle the case where user or user._id is not available
  //   // This could be showing a loading state, redirecting, or displaying an error message
  //   return <p>Loading...</p>;
  //}
  
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
