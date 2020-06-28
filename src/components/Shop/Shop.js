/**
 * author: Denis Kravchenko
 */
import React, { useState, useEffect } from "react";
import Item from "./Item/Item";
import Selection from "./Selection/Selection";
import { Grid, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  getCanoe,
  getKayak,
  hideKayak,
  getPaddleBoard,
  hideCanoe,
  hidePaddleBoard,
  isEmpty,
} from "../../redux/inventory/InventoryActions";

const Shop = () => {
  const [boats, setBoats] = useState({
    canoe: false,
    kayak: false,
    paddleboard: false,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    boats.canoe ? dispatch(getCanoe()) : dispatch(hideCanoe());
    boats.kayak ? dispatch(getKayak()) : dispatch(hideKayak());
    boats.paddleboard
      ? dispatch(getPaddleBoard())
      : dispatch(hidePaddleBoard());

    // console.log(boats.canoe, boats.kayak, boats.paddleboard);

    if (!boats.canoe && !boats.kayak && !boats.paddleboard) {
      dispatch(isEmpty());
    }
  }, [boats]);

  const inventory = useSelector((state) => state.inventory);
  const isEmptyNote = useSelector((state) => state.inventory.note);

  const uid = useSelector((state) => state.firebase.auth.uid);
  const test = useSelector((state) => console.log(state));
  if (!uid) return <Redirect to="/signin" />;

  const handleSelection = (e) => {
    setBoats({ ...boats, [e.target.name]: e.target.checked });
  };

  //TODO make sure I add proper css styles
  return (
    <div>
      <Grid
        container
        style={{
          marginTop: "100px",
        }}
      >
        <Grid item xs={12} sm={2}></Grid>
        <Grid item xs={12} sm={2}>
          <Selection state={boats} handleSelection={handleSelection} />
        </Grid>
        {/* <Grid item xs={12} sm={}></Grid> */}
        <Grid item xs={12} sm={6}>
          <Grid container spacing={4}>
            <Typography>{isEmptyNote}</Typography>
            {inventory.canoe
              ? inventory.canoe.map((boat) => {
                  return <Item key={boat.id} boat={boat} />;
                })
              : ""}
            {inventory.kayak
              ? inventory.kayak.map((boat) => {
                  return <Item key={boat.id} boat={boat} />;
                })
              : ""}
            {inventory.paddleBoard
              ? inventory.paddleBoard.map((boat) => {
                  return <Item key={boat.id} boat={boat} />;
                })
              : ""}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={2}></Grid>
      </Grid>
    </div>
  );
};

export default Shop;
