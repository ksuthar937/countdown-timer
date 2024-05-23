import React from "react";

import classes from "./Card.module.css";

const Card = ({ value, type }) => {
  return (
    <div className={classes.container}>
      <h1 className={classes.value}>{value}</h1>
      <h2 className={classes.type}>{type}</h2>
    </div>
  );
};

export default Card;
