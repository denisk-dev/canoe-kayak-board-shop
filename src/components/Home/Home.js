/**
 * author: Denis Kravchenko
 */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardItems from "./Card/CardItems";
import Wallpaper from "../../images/wallpaper.jpg";
import Canoe from "../../images/canoe.jpg";
import KayakIcon from "../../images/kayakicon.jpg";
import Paddleboard from "../../images/paddleboard.jpg";
import ShopLink from "./Card/ShopLink";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import BottomBar from "../Appbar/BottomBar";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 880,
  },
  grid: {
    marginTop: 100,
    justifyContent: "center",
  },
  inventoryButton: {
    color: "whitesmoke",
    border: "2px solid whitesmoke",
    fontSize: 35,
    position: "absolute",
    top: "40%",
    left: "50%",
    width: "250px",
    marginLeft: "-125px",
    "&:hover": {
      background: "whitesmoke",
      color: "rgb(50,50,50)",
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  const uid = useSelector((state) => state.firebase.auth.uid);

  if (!uid) return <Redirect to="/signin" />;

  return (
    <div>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={Wallpaper} />
      </Card>
      <Button
        href="/#inventory"
        variant="outlined"
        className={classes.inventoryButton}
      >
        Inventory
      </Button>

      <Grid container className={classes.grid} spacing={3}>
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={2}>
          <CardItems boatType={Canoe} type={"Canoe"} />
        </Grid>
        <Grid item xs={12} sm={2}>
          <CardItems boatType={KayakIcon} type={"Kayak"} />
        </Grid>
        <Grid item xs={12} sm={2}>
          <CardItems boatType={Paddleboard} type={"Board"} />
        </Grid>
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={3}></Grid>
        <Grid item xs={12} sm={6}>
          <ShopLink />
        </Grid>
        <Grid item xs={12} sm={3}></Grid>
      </Grid>

      <BottomBar />
    </div>
  );
};

export default Home;
