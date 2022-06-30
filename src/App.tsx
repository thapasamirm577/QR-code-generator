import { Fragment } from "react";
import "./App.css";
import Home from "./component/home";
import Navbar from "./component/navbar";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Home />
    </Fragment>
  );
}

export default App;
