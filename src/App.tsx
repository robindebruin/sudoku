import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuBar from "./components/menu-bar/MenuBar";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header> */}
      <MenuBar />
      <div className={classes.root}>
        <Typography variant="h1" component="h2" gutterBottom>
          h1. Heading
        </Typography>
      </div>
    </div>
  );
}

export default App;
