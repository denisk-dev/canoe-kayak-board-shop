/**
 * author: Denis Kravchenko
 */
import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { Link as NavLink } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { signOut } from "../../../redux/auth/authActions";
import { useDispatch } from "react-redux";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";

import { useFirestoreConnect } from "react-redux-firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(5),
    },
  },
  icons: {
    color: "whitesmoke",
    fontSize: 25,
    margin: 15,
  },
}));

const SignedIn = (props) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  useFirestoreConnect([{ collection: "carts" }]);

  const cart = useSelector((state) => state.firestore.ordered);
  const [numberOfItemsInCart, setNumberOfItemsInCart] = useState(0);

  useEffect(() => {
    if (cart.carts) {
      cart.carts.forEach((item) => {
        if (item.authId === props.uid) {
          setNumberOfItemsInCart(
            (numberOfItemsInCart) => numberOfItemsInCart + 1
          );
        }
      });
    }
    return () => {
      setNumberOfItemsInCart(0);
    };
  }, [cart]);

  // console.log(numberOfItemsInCart);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    console.log("handling sign out");
    //dispatch(signOut());
  };

  return (
    <React.Fragment>
      <NavLink
        component={Link}
        to="/cart"
        className={classes.icons}
        style={{ textDecoration: "none" }}
      >
        <Badge badgeContent={numberOfItemsInCart} color="secondary">
          <i className="fas fa-shopping-cart"></i>
        </Badge>
      </NavLink>
      <NavLink
        className={classes.icons}
        style={{ textDecoration: "none" }}
        component={Link}
        to="/signin"
        onClick={(event) => {
          handleClick(event);
        }}
      >
        <Avatar>D</Avatar>
      </NavLink>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleSignOut}>Logout</MenuItem>
      </Menu>
    </React.Fragment>
  );
};

export default SignedIn;
