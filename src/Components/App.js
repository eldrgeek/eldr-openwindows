import React from "react";
import Layout from "./Layout";
// import { hot } from 'react-hot-loader/root'
import CountButton from "./CountButton";
// const AutoButton = (props) => {
// return  <Button variant="contained" color="primary" onClick={props.onClick}>
//         {props.label}
//       </Button>
// }
function App() {
  return (
    <div>
      <CountButton />
      <Layout />
    </div>
  );
}
//test
// export default process.env.NODE_ENV === "development" ? hot(App) : App
export default App;
