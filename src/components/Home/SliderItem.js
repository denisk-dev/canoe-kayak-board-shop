import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import { Link } from "react-router-dom";

import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    boxShadow: "none",
    position: "relative",
  },
});

const SliderItem = (props) => {
  const classes = useStyles();

  return (
    <Link
      to={`/item/${props.item.id}?name=${props.item.name}&size=${props.item.size}&price=${props.item.price}&image=${props.item.image}`}
    >
      <Card className={classes.root}>
        <Typography
          gutterBottom
          variant="body1"
          component="h3"
          style={{ textAlign: "center", position: "absolute", top: 80 }}
        >
          ${props.item.price}
        </Typography>
        <CardMedia
          image={props.item.image}
          title={props.item.name}
          style={{ height: 400 }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="subtitle1"
            component="h2"
            style={{
              textAlign: "center",
              position: "absolute",
              bottom: 60,
            }}
          >
            {props.item.name}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default SliderItem;
