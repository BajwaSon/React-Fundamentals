import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calcVal, setCalcVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalcVal("");
    } else if (buttonText === "=") {
      const result = eval(calcVal);
      setCalcVal(result);
    } else {
      const newDisplayVal = calcVal + buttonText;
      setCalcVal(newDisplayVal);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayVal={calcVal}></Display>
      <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
