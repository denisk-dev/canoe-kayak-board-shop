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
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { addItem, deleteItem } from "../../../redux/cart/CartActions";
import { useDispatch, useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

const useStyles = makeStyles({
  root: { backgroundColor: "whitesmoke" },
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
  media: {
    height: 200,
  },
});

const Item = (props) => {
  const classes = useStyles();
  console.log(props);

  const dispatch = useDispatch();

  useFirestoreConnect([{ collection: "carts" }]);

  const state = useSelector((state) => state.firestore.ordered);
  const uid = useSelector((state) => state.firebase.auth.uid);

  const [isInCart, setIsInCart] = useState(false);

  const handleDeleteCart = () => {
    setIsInCart(!isInCart);
    if (state.carts && uid) {
      state.carts.forEach((item) => {
        if (uid === item.authId && props.boat.id === item.id_)
          dispatch(deleteItem({ id: item.id }));
      });
    }
  };

  const handleAddToCart = () => {
    setIsInCart(true);
    console.log(props.boat.name, props.boat.size);
    dispatch(
      addItem({
        price: props.boat.price,
        name: props.boat.name,
        id_: props.boat.id,
        size: props.boat.size,
        image: props.boat.image,
      })
    );
  };

  useEffect(() => {
    if (state.carts && uid) {
      state.carts.forEach((item) => {
        if (uid === item.authId && props.boat.id === item.id_)
          setIsInCart(true);
        // else setIsInCart(false);
      });
    }
  }, [state, uid]);

  // console.log(props);
  // console.log(uid);
  console.log(props.boat.id);
  return (
    <Grid item sm={4}>
      <Card className={classes.root}>
        <CardHeader
          title={
            <Typography>
              {props.boat.name} - {props.boat.size}
            </Typography>
          }
          subheader={`$${props.boat.price}`}
          action={
            isInCart ? (
              <IconButton onClick={handleDeleteCart}>
                <CheckCircleIcon style={{ color: "rgb(0,204,0)" }} />
              </IconButton>
            ) : (
              <IconButton onClick={handleAddToCart}>
                <AddCircleIcon style={{ color: "rgb(60,60,60)" }} />
              </IconButton>
            )
          }
        />
        <Link
          to={`/item/${props.boat.id}?name=${props.boat.name}&size=${props.boat.size}&price=${props.boat.price}&image=${props.boat.image}`}
        >
          <CardMedia
            image={props.boat.image}
            className={classes.media}
          ></CardMedia>
        </Link>
      </Card>
    </Grid>
  );
};

export default Item;
