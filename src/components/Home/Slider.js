import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import { getCanoe } from "../../redux/inventory/InventoryActions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import "./Slider.css";

import SliderItem from "./SliderItem";

const SliderItems = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCanoe());
  }, []);

  const inventory = useSelector((state) => state.inventory);

  console.log(inventory);

  return (
    // <div>
    <Slider {...settings} style={{ marginTop: 100 }}>
      {inventory.canoe
        ? inventory.canoe.map((item) => (
            <SliderItem key={item.id} item={item} />
          ))
        : ""}
    </Slider>
    // </div>
  );
};

export default SliderItems;
