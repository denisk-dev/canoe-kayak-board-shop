/**
 * author: Denis Kravchenko
 */
//icon 'ninja' from loading.io
import React from "react";
import spinnerSVG from "./Spinner.svg";

const Spinner = () => {
  return (
    <img
      src={spinnerSVG}
      alt="Loading"
      style={{ width: "100px", display: "block", margin: "100px auto" }}
    />
  );
};

export default Spinner;
