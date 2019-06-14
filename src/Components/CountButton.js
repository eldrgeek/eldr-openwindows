import Button from "@material-ui/core/Button";
import { MuiThemeProvider } from "@material-ui/styles";
import React, { useState } from "react";
function App() {
  let [count, setCount] = useState(0);
  let click = () => {
    setCount((count = count + 1));
  };
  return (
    <div>
      {/* <MuiThemeProvider> */}
      <Button
        label={"Click on Me" + count}
        onClick={click}
        style={{
          height: "40px",
          color: "red",
          backgroundColor: "#ffb400" //hex color values
        }}
      >
        {"Click on Me really" + count}
      </Button>
      {/* </MuiThemeProvider> */}
    </div>
  );
}

export default App;
