import React from "react";
import ReactDOM from "react-dom";
import Layout from "./Components/Layout";

// const AutoButton = (props) => {
// return  <Button variant="contained" color="primary" onClick={props.onClick}>
//         {props.label}
//       </Button>
// }
function App() {
  return <Layout />;
}

ReactDOM.render(<App />, document.querySelector("#app"));
