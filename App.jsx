import React from "react";
import Die from "./Die";

export default function App() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    let numbers = [...Array(10).keys()];
    let max = 6;
    let min = 1;
    return numbers.map((num) =>
      Math.floor(Math.random() * (max - min + 1) + min)
    );
  }

  const diceElements = dice.map(die => <Die value={die} />) 

  return (
    <main>
      <div className="dice-container">
        {diceElements}
      </div>
    </main>
  );
}
