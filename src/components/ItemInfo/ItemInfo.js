/**
 * author: Denis Kravchenko
 */
import React, { useEffect } from "react";
import queryString from "query-string";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";

import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "150px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    // width: 400,
    // height: 400,
    minWidth: 400,
    minHeight: 400,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const ItemInfo = (props) => {
  const query = queryString.parse(props.location.search);

  const { name, price, size, image } = query;

  const classes = useStyles();
  const theme = useTheme();

  console.log(name);
  console.log(price);
  console.log(size);
  console.log(image);
  return (
    <Grid container>
      <Grid item xs={12} sm={3}></Grid>
      <Grid item xs={12} sm={6}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.cover}
            image={image}
            title="Live from space album cover"
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {name}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {size}
              </Typography>
              <Typography>${price}</Typography>
              <Typography>
                Canoes are widely used for competition and pleasure, such as
                racing, whitewater, touring and camping, freestyle and general
                recreation. Canoeing has been part of the Olympics since 1936.
                The intended use of the canoe dictates its hull shape and length
                and construction material. Historically, canoes were dugouts or
                made of bark on a wood frame, but construction materials evolved
                to canvas on a wood frame, then to aluminum. Most modern canoes
                are made of molded plastic or composites such as fiberglass.
              </Typography>
            </CardContent>
            <div className={classes.controls}>
              <Button>Add to Cart</Button>
            </div>
          </div>
        </Card>
      </Grid>
      <Grid item xs={12} sm={3}></Grid>
    </Grid>
  );
};

export default ItemInfo;
