import React, { useState, useEffect } from "react";
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
  const [board, updateBoard] = useState(initialSudoku);
  const [rowItemIndex, updateRowItem] = useState([0,0])
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

  const containsAllNumbers = (numbers:number[]): boolean => {
    const goal = [1,2,3,4,5,6,7,8,9];
    return goal.every(e => numbers.includes(e))
  }
  
  const verticalRow = (itemIndex: any): number[] => {
    let row = [];
    for (let index = 0; index <   board.length ; index++) {
       row.push(board[index][itemIndex])
    }
    return row
  }

  const box = () => {

  }

  const handleClick = (rowIndex: number, itemIndex: number) => {    
    updateRowItem([rowIndex, itemIndex])
    updateBoard(prevState => {
      let newState = [...prevState];
      const prevVal = newState[rowIndex][itemIndex];
      newState[rowIndex][itemIndex] = prevVal < 9 ? prevState[rowIndex][itemIndex] + 1 : 0;
      return newState;
    } );
  };

  useEffect(() => {
    return () => {
   // three checks needed: horizontal, verival and block
   containsAllNumbers(board[rowItemIndex[0]]);
   containsAllNumbers(verticalRow(rowItemIndex[1]));
    };
  }, [board])

  return (
    <div>
      {board.map((row, rowIndex) => (
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
