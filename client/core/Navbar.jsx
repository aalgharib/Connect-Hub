// import * as React from "react";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import CommentIcon from "@mui/icons-material/Comment";
import Avatar from "@mui/material/Avatar";
import Logo from "../assets/logo.png";
import PeopleIcon from "@mui/icons-material/People";
import LogoutIcon from "@mui/icons-material/Logout";
import auth from "../lib/authHelper.js";
import { signout } from "../lib/apiAuth.js";
import { useNavigate } from "react-router";
import {
  Grid,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

// search bar styles
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  paddingRight: "48px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

// If you need to add authentication or something onto the icons, you need to add an action onto them
// Maybe you need to use a different way instead of the Link
const Navbar = () => {
  const navigate = useNavigate();
  const handleSignout = async () => {
    const result = await signout().then(navigate("/"));
    // Handle the result or perform additional actions if needed
    console.log(result);
  };

  // for mobile
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "#c2c2c2",
        boxShadow: "none",
        marginBottom: 0,
        height: "60px",
      }}
    >
      <Toolbar>
        <Grid container alignItems="center">
          {/* Logo */}
          <Grid item xs={isMobile ? 2 : 1}>
            <Link
              to={"/Home/" + auth.isAuthenticated().user._id}
              style={{ color: "inherit" }}
            >
              <IconButton size="small" color="inherit">
                <Avatar src={Logo} alt="Logo" />
              </IconButton>
            </Link>
          </Grid>

          {/* Search bar */}
          <Grid
            item
            xs={isMobile ? 10 : 6}
            sx={{
              display: "flex",
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            <Search sx={{ maxWidth: isMobile ? "80%" : "none" }}>
              <StyledInputBase
                placeholder="Search"
                id="search"
                name="search"
                inputProps={{ "aria-label": "search" }}
              />
              <IconButton
                type="submit"
                sx={{ position: "absolute", right: 0, top: 0, height: "100%" }}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Search>
          </Grid>

          {/* Icons */}
          {!isMobile && (
            <Grid item xs={5} textAlign="right">
              <Link to={"/posts/"} style={{ color: "inherit" }}>
                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <CommentIcon />
                </IconButton>
              </Link>
              <Link
                to={"/friends/" + auth.isAuthenticated().user._id}
                style={{ color: "inherit" }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <PeopleIcon />
                </IconButton>
              </Link>
              <Link
                to={"/profile/" + auth.isAuthenticated().user._id}
                style={{ color: "inherit" }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </Link>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="open drawer"
                onClick={handleSignout}
              >
                <LogoutIcon />
              </IconButton>
            </Grid>
          )}
        </Grid>

        {/* Mobile Menu */}
        {isMobile && (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
          <List>
            {/* Menu items */}
            <ListItem button component={Link} to="/posts">
              <ListItemIcon>
                <CommentIcon />
              </ListItemIcon>
              <ListItemText primary="Posts" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to={"/friends/" + auth.isAuthenticated().user._id}
            >
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItem>
            <ListItem
              button
              component={Link}
              to={"/profile/" + auth.isAuthenticated().user._id}
            >
              <ListItemIcon>
                <AccountCircle />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button onClick={handleSignout}>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="SignOut" />
            </ListItem>
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
