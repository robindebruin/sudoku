import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuBar from "./components/MenuBar";
import SudokuContainer from "./components/SudokuContainer";
import { Container, CssBaseline } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
    margin: "auto"
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <CssBaseline />
      <MenuBar />
      <Container maxWidth="lg">
        <Typography variant="h1" component="h2" gutterBottom>
          h1. Heading
        </Typography>
        <div className={classes.root}>
          <SudokuContainer />
        </div>
      </Container>
    </div>
  );
}

export default App;
