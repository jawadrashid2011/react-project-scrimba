import React from "react";
import Die from "./Die";

export default function App() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    let numbers = [];
    for (let i = 0; i < 10; i++) {
      numbers.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false
      });
    }
    return numbers;
  }

  function roll() {
    setDice(allNewDice());
  }

  const diceElements = dice.map((die) => <Die value={die.value} />);

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="dice-roll-btn" onClick={roll}>
        Roll
      </button>
    </main>
  );
}
