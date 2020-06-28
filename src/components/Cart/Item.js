/**
 * author: Denis Kravchenko
 */
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import CloseIcon from "@material-ui/icons/Close";

import { deleteItem } from "./../../redux/cart/CartActions";
import { useDispatch } from "react-redux";

const Item = (props) => {
  console.log(props);

  const [itemCounter, setItemCounter] = useState(1);

  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    console.log(props.item.id);
    dispatch(deleteItem({ id: props.item.id }));
  };

  return (
    <TableRow>
      <TableCell>
        <Button onClick={handleDeleteItem}>
          <CloseIcon />
        </Button>
      </TableCell>
      <TableCell>{props.item.name}</TableCell>
      <TableCell>
        <Button
          size="small"
          onClick={() => {
            if (itemCounter > 0) {
              setItemCounter((itemCounter) => itemCounter - 1);
              props.setItemsPrices((itemsPrices) => {
                const priceToRemoveIndex = itemsPrices.indexOf(
                  props.item.price
                );
                const updatedItemsPrices = itemsPrices.slice();
                // console.log(priceToRemoveIndex);

                if (priceToRemoveIndex > -1)
                  updatedItemsPrices.splice(priceToRemoveIndex, 1);
                // console.log(updatedItemsPrices);
                return updatedItemsPrices;
              });
            }
          }}
        >
          {" "}
          <RemoveIcon />{" "}
        </Button>
        {itemCounter}
        <Button
          size="small"
          onClick={() => {
            props.setItemsPrices((itemsPrices) =>
              itemsPrices.concat(props.item.price)
            );
            setItemCounter((itemCounter) => itemCounter + 1);
          }}
        >
          {" "}
          <AddIcon />{" "}
        </Button>
      </TableCell>
      <TableCell>{props.item.size}</TableCell>
      <TableCell></TableCell>
      <TableCell>${props.item.price}</TableCell>
    </TableRow>
  );
};

export default Item;
