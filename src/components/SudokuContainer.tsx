import React, { useState } from "react";
import { Grid, Theme, Paper } from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/styles";

const initialSudoku = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "auto"
    },
    paper: {
      height: 35,
      width: 35
    },
    horizontalLine: {
      ["border-top"]: "4px solid red"
    },
    verticalLine: {
      ["border-left"]: "4px solid red"
    },
    successTile: {
      ["background-color"]: "gold"
    }
  })
);

const SudokuContainer = () => {
  const [state, setstate] = useState(initialSudoku);
  const classes = useStyles();

  const showBorder = (rowIndex: number, itemIndex: number): string => {
    const showHorizontalLine = rowIndex % 3 === 0 && rowIndex !== 0;
    const showVerticalLine = itemIndex % 3 === 0 && itemIndex !== 0;
    if (showHorizontalLine && showVerticalLine) {
      return `${classes.horizontalLine} ${classes.verticalLine}`;
    }
    if (showHorizontalLine) return classes.horizontalLine;
    if (showVerticalLine) return classes.verticalLine;
    return "";
  };

  const showSuccessStyle = (rowIndex: number, itemIndex: number): string => {
    return classes.successTile;
  };

  const containsAllNumbers = (numbers:[number]) => {
    const goal = [1,2,3,4,5,6,7,8,9];
    return goal.every(e => numbers.includes(e))
  }

  const handleClick = (rowIndex: number, itemIndex: number) => {
    setstate(prevState => {
      let newState = [...prevState];
      const prevVal = newState[rowIndex][itemIndex];
      newState[rowIndex][itemIndex] = prevVal < 9 ? prevState[rowIndex][itemIndex] + 1 : 0;
      return newState;
    });

    // three checks: horizontal, verival and block
  };

  return (
    <div>
      {state.map((row, rowIndex) => (
        <Grid key={rowIndex} container spacing={2}>
          {row.map((item, itemIndex) => (
            <Grid key={itemIndex} item xs={1} className={showBorder(rowIndex, itemIndex)}>
              <Paper
                onClick={() => handleClick(rowIndex, itemIndex)}
                className={`${classes.paper} ${showSuccessStyle(rowIndex, itemIndex)}`}
              >
                {item}
              </Paper>
            </Grid>
          ))}
        </Grid>
      ))}
    </div>
  );
};

export default SudokuContainer;
