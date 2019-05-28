import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
const AutoButton = props => {
  return (
    <Button variant="contained" color="primary" onClick={props.onClick}>
      {props.label}
    </Button>
  );
};

export default AutoButton;
