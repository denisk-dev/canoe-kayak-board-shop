/**
 * author: Denis Kravchenko
 */
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signUp } from "../../redux/auth/authActions";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 200,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  textInput: {
    width: "100%",
    marginBottom: 20,
  },
});

const SignUp = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [vpass, setVpass] = useState("");
  const dispatch = useDispatch();

  const err = useSelector((state) => state.authentication.err);
  const [psswdErr, setPsswdErr] = useState("");

  // console.log(err);
  const state = useSelector((state) => console.log(state));

  const uid = useSelector((state) => state.firebase.auth.uid);
  if (uid) {
    return <Redirect to="/" />;
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password === vpass) {
      setPsswdErr("");
      dispatch(signUp({ name, email, password }));
    } else {
      setPsswdErr("Password don't match");
    }
  };

  return (
    <Grid container>
      <Grid item sm={5}></Grid>
      <Grid item sm={2}>
        <Card className={classes.root} variant="outlined">
          <form onSubmit={handleSignUp}>
            <CardContent>
              <Typography>{psswdErr}</Typography>
              <Typography>{err}</Typography>
              <TextField
                className={classes.textInput}
                required
                id="standard-required"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                className={classes.textInput}
                required
                id="standard-required"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                className={classes.textInput}
                required
                id="standard-required"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                className={classes.textInput}
                required
                id="standard-required"
                label="Re-enter Password"
                value={vpass}
                onChange={(e) => setVpass(e.target.value)}
              />
            </CardContent>
            <CardActions>
              <Button
                type="submit"
                size="large"
                variant="contained"
                color="primary"
                style={{ width: "100%" }}
              >
                Sign Up
              </Button>
            </CardActions>
          </form>
        </Card>
      </Grid>
      <Grid item sm={5}></Grid>
    </Grid>
  );
};

export default SignUp;
