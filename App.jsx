import React from "react";
import Die from "./Die";
import { nanoid } from "nanoid";

export default function App() {
  const [dice, setDice] = React.useState(allNewDice());

  function allNewDice() {
    let newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return newDice;
  }

  function roll() {
    setDice(allNewDice());
  }

  function holdDice(id) {
    setDice((prevDice) => {
      return prevDice.map((die) =>
        die.id == id ? { ...die, isHeld: !die.isHeld } : die
      );
    });
  }

  const diceElements = dice.map((die) => (
    <Die
      value={die.value}
      key={die.id}
      isHeld={die.isHeld}
      hold={() => holdDice(die.id)}
    />
  ));

  return (
    <main>
      <div className="dice-container">{diceElements}</div>
      <button className="dice-roll-btn" onClick={roll}>
        Roll
      </button>
    </main>
  );
}
