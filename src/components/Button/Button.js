import React from "react";

import calsses from "./Button.module.css";

const Button = ({ children }) => {
  return <button className={calsses.btn}>{children}</button>;
};

export default Button;
