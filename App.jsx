import React from "react";
import Die from "./Die";

export default function App() {
  function allNewDice() {
    let numbers = [...Array(10).keys()]
    let max = 6
    let min = 1
    var newNumbers = numbers.map((num) => Math.floor(Math.random() * (max - min + 1) + min))
    console.log(newNumbers);
  }

  allNewDice()

  return (
    <main>
      <div className="dice-container">
        <Die value={1} />
        <Die value={2} />
        <Die value={3} />
        <Die value={4} />
        <Die value={5} />
        <Die value={6} />
        <Die value={1} />
        <Die value={2} />
        <Die value={3} />
        <Die value={4} />
      </div>
    </main>
  );
}
