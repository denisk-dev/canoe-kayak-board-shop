/**
 * author: Denis Kravchenko
 */
import React from "react";
import { Typography } from "@material-ui/core";
import { Link as NavLink } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

const SignedOut = () => {
  const classes = useStyles();

  return (
    <Typography className={classes.root}>
      <NavLink component={Link} to="/signin">
        SignIn
      </NavLink>
      <NavLink component={Link} to="/signup">
        SignUp
      </NavLink>
    </Typography>
  );
};

export default SignedOut;
