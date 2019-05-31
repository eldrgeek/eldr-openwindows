import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
const AutoButton = props => {
  return (
    <Button id="button" variant="contained" color="primary" {...props}>
      {props.label}
    </Button>
  );
};

export default AutoButton;
