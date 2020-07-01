/**
 * author: Denis Kravchenko
 */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";

const useStyles = makeStyles({
  root: {
    maxWidth: 205,
    // margin: "0 auto",
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Selection = (props) => {
  console.log(props);
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <FormControl component="fieldset">
          <FormGroup>
            <FormControlLabel
              labelPlacement="start"
              control={
                <Checkbox
                  checked={props.state.canoe}
                  onChange={props.handleSelection}
                  name="canoe"
                />
              }
              label="Canoe"
            />
            <FormControlLabel
              labelPlacement="start"
              control={
                <Checkbox
                  checked={props.state.kayak}
                  onChange={props.handleSelection}
                  name="kayak"
                />
              }
              label="Kayak"
            />
            <FormControlLabel
              labelPlacement="start"
              control={
                <Checkbox
                  checked={props.state.board}
                  onChange={props.handleSelection}
                  name="paddleboard"
                />
              }
              label="Paddleboard"
            />
          </FormGroup>
        </FormControl>
      </CardContent>
    </Card>
  );
};

export default Selection;
