/**
 * author: Denis Kravchenko
 */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SignedInLinks from "./Navigation/SignedIn";
import SignedOutLinks from "./Navigation/SignedOut";
import { useSelector } from "react-redux";
import { Link as NavLink } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../../logo/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  toolbar: {
    backgroundColor: "rgba(40,40,40)",
    color: "whitesmoke",
  },
  nav: {
    "& > * + *": {
      marginLeft: theme.spacing(5),
    },
  },
  navlink: {
    color: "whitesmoke",
    fontSize: 25,
    "&:hover": {
      color: "grey",
    },
  },
}));

const Appbar = () => {
  const classes = useStyles();

  const uid = useSelector((state) => state.firebase.auth.uid);
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.toolbar}>
        <Toolbar>
          <img src={logo} alt="logo" style={{ marginRight: 40 }} />
          <Typography className={classes.nav}>
            <NavLink
              component={Link}
              to="/"
              className={classes.navlink}
              style={{ textDecoration: "none" }}
            >
              Home
            </NavLink>
            <NavLink
              component={Link}
              to="/shop"
              className={classes.navlink}
              style={{ textDecoration: "none" }}
            >
              Shop
            </NavLink>
          </Typography>
          <Typography variant="h6" className={classes.title}></Typography>
          {uid ? <SignedInLinks uid={uid} /> : <SignedOutLinks />}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Appbar;
