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

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    // maxWidth: 545,
  },
  media: {
    height: 270,
    minWidth: 500,
  },
});

const CardItems = (props) => {
  const classes = useStyles();

  return (
    <div style={{ position: "relative" }} id="inventory">
      <Link to={`/shop?type=${props.type}`}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={props.boatType} />
            <Typography
              variant="h3"
              component="h3"
              style={{
                position: "absolute",
                top: "0%",
                // marginTop: "-25px",
                color: "white",
              }}
            >
              {props.type}
            </Typography>
          </CardActionArea>
        </Card>
      </Link>
    </div>
  );
};

export default CardItems;
