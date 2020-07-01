/**
 * author: Denis Kravchenko
 */
import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  appBar: {
    // top: "auto",
    // bottom: "-100",
    position: "static",
    marginTop: 250,
  },
}));

const BottomBar = () => {
  const classes = useStyles();

  return (
    <AppBar color="primary" className={classes.appBar}>
      <Toolbar>
        <Typography>Hello</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default BottomBar;
