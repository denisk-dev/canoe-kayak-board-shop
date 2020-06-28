/**
 * author: Denis Kravchenko
 */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { signIn } from "../../redux/auth/authActions";
import { Redirect } from "react-router-dom";

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

const SignIn = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const error = useSelector((state) => {
    console.log(state);
    return state.authentication.err;
  });

  const uid = useSelector((state) => state.firebase.auth.uid);

  if (uid) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    dispatch(signIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <Grid container>
      <Grid item sm={5}></Grid>
      <Grid item sm={2}>
        <Card className={classes.root} variant="outlined">
          <form onSubmit={handleSubmit}>
            <CardContent>
              <Typography>{error ? error : ""}</Typography>
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
            </CardContent>
            <CardActions>
              <Button
                type="submit"
                size="large"
                variant="contained"
                color="primary"
                style={{ width: "100%" }}
              >
                Sign In
              </Button>
            </CardActions>
          </form>
        </Card>
      </Grid>
      <Grid item sm={5}></Grid>
    </Grid>
  );
};

export default SignIn;
