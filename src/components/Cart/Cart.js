/**
 * author: Denis Kravchenko
 */
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import { useFirestoreConnect } from "react-redux-firebase";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Typography } from "@material-ui/core";

import Item from "./Item";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({});

const Cart = () => {
  const classes = useStyles();
  const uid = useSelector((state) => state.firebase.auth.uid);

  useFirestoreConnect([{ collection: "carts" }]);
  const state = useSelector((state) => state.firestore.ordered);

  const [itemsPrices, setItemsPrices] = useState([]);

  // const [itemCounter, setItemCounter] = useState(1);

  useEffect(() => {
    if (state.carts) {
      state.carts.forEach((item) => {
        console.log(item);
        setItemsPrices((itemsPrices) => itemsPrices.concat(item.price));
      });
    }
    return () => {
      setItemsPrices([]);
    };
  }, [state]);

  const cart = useSelector((state) => state.firestore.ordered);

  if (!uid) return <Redirect to="/signin" />;
  return (
    <Grid container>
      <Grid item xs={12} sm={2}></Grid>
      <Grid item xs={12} sm={8}>
        <TableContainer component={Paper} style={{ marginTop: 150 }}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Item</TableCell>
                <TableCell></TableCell>
                <TableCell>Size</TableCell>
                <TableCell></TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.carts ? (
                cart.carts.map((item) => {
                  return (
                    <Item
                      key={item.id}
                      item={item}
                      setItemsPrices={setItemsPrices}
                      itemsPrices={itemsPrices}
                    />
                  );
                })
              ) : (
                <TableRow></TableRow>
              )}
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell align="right">
                  <Typography>Subtotal : </Typography>
                  <Typography>Tax : </Typography>
                  <br />
                  <Typography>Total : </Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    ${itemsPrices ? itemsPrices.reduce((a, b) => a + b, 0) : ""}
                  </Typography>
                  <Typography>
                    $
                    {itemsPrices
                      ? (
                          itemsPrices.reduce((a, b) => a + b, 0) * 0.07
                        ).toFixed()
                      : ""}
                  </Typography>
                  <br />
                  <Typography>
                    $
                    {itemsPrices
                      ? (
                          itemsPrices.reduce((a, b) => a + b, 0) * 1.07
                        ).toFixed()
                      : ""}
                  </Typography>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>

                <TableCell colSpan={2} align="right">
                  <Button variant="contained" color="primary">
                    Place Order
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} sm={2}></Grid>
    </Grid>
  );
};

export default Cart;
