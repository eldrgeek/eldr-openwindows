import React from "react";

import Button from "@material-ui/core/Button";
const AutoButton = props => {
  return (
    <Button id="button" variant="contained" color="primary" {...props}>
      {props.label}
    </Button>
  );
};
AutoButton.defaultProps = {
  label: "test"
};
export default AutoButton;
