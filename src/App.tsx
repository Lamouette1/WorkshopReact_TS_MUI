import { useState } from "react";
import { Button, Container, Grid, Paper, styled } from "@mui/material";
import { DigitButton } from "./DigitButton";
import { OperationButton } from "./OperationButton";
import styled from 'styled-components';

const StyledComponent = styled(`div`)(({ theme }) => ({
  font-size: ${props => props.theme.typography.fontSize},
  font-family: ${props => props.theme.typography.fontFamily}
}));

const OutputContainer = styled(`div`)(({ theme }) => ({
  width: "100%",
  textAlign: "right",
  height: "2em",
  padding: theme.spacing(2),
  fontSize: "3em",
  overflow: "hidden",
}));

const CalculatorBase = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(4),
  borderRadius: 15,
}));

function App() {
  const [prevValue, setPrevValue] = useState(null);
  const [currentValue, setCurrentValue] = useState(0);
  const [operator, setOperator] = useState(null);
  const [overwrite, setOverwrite] = useState(false);
  /* !!!TODO
  Create a state for currentValue, prevValue, operation and overwrite
  */

  // const equals = () => {
  //   const val = calculate();
  //   setCurrentValue(`${val}`);
  //   setPrevValue("");
  //   setOperation("");
  //   setOverwrite(true);
  // };

  // const calculate = () => {
  //   if (!prevValue || !operation) return currentValue;

  //   const curr = parseFloat(currentValue);
  //   const prev = parseFloat(prevValue);

  //   let result;
  //   switch (operation) {
  //     case "÷":
  //       result = prev / curr;
  //       break;
  //     case "*":
  //       result = prev * curr;
  //       break;
  //     case "-":
  //       result = prev - curr;
  //       break;
  //     case "+":
  //       result = prev + curr;
  //       break;
  //   }
  //   return result;
  // };

  // const clear = () => {
  //   setPrevValue("");
  //   setOperation("");
  //   setCurrentValue("0");
  //   setOverwrite(true);
  // };

  // const del = () => {
  //   setCurrentValue("0");
  //   setOverwrite(true);
  // };

  // const percent = () => {
  //   const curr = parseFloat(currentValue);
  //   setCurrentValue((curr / 100).toString());
  // };

  // const selectOperation = (x: string) => {
  //   if (prevValue) {
  //     const val = calculate();
  //     setCurrentValue(`${val}`);
  //     setPrevValue(`${val}`);
  //   } else {
  //     setPrevValue(currentValue);
  //   }
  //   setOperation(x);
  //   setOverwrite(true);
  // };

  // const setDigit = (digit: string) => {
  //   if (currentValue[0] === "0" && digit === "0") return;
  //   if (currentValue.includes(".") && digit === ".") return;

  //   if (overwrite && digit !== ".") {
  //     setCurrentValue(digit);
  //   } else {
  //     setCurrentValue(`${currentValue}${digit}`);
  //   }
  //   setOverwrite(false);
  // };

  return (
    <div>
      {/* ... your JSX */}
    </div>
  );
};

export default App;
