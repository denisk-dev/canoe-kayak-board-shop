/**
 * author: Denis Kravchenko
 */
import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const ShopLink = () => {
  return (
    <Card
      style={{
        backgroundImage:
          "linear-gradient(145deg, #9fb8ad 1%, #1fc8db 45%, #2cb5e8 76%)",
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h3"
          component="h3"
          style={{ textAlign: "center", color: "whitesmoke" }}
        >
          Free shipping on orders over $100
        </Typography>
      </CardContent>

      <CardActions style={{ justifyContent: "center" }}>
        <Button size="large" variant="contained" color="secondary" href="/shop">
          Order Online
        </Button>
      </CardActions>
    </Card>
  );
};

export default ShopLink;
