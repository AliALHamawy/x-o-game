"use client";
import { useEffect, useState } from "react";
import Cell from "./cell"
import { styleText } from "node:util";


export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("cross");
  const [winningMessage, setWinningMessage] = useState("");
  useEffect(() => {
    winningCombos.forEach((combo) => {
      const circleWins = combo.every((cell) => cells[cell] === "circle");
      const crossWins = combo.every((cell) => cells[cell] === "cross");

      if (circleWins) {
        setWinningMessage("Circle Wins!");
      } else if (crossWins) {
        setWinningMessage("Cross Wins!");

      }
    })
  }, [cells, winningMessage])
  useEffect(() => {
    if (cells.every((cell) => cell !== "") && !winningMessage) {
      setWinningMessage("Draw!")
    }
  }, [cells, winningMessage]);
  const handleRestart = () => {
    setCells(["", "", "", "", "", "", "", "", ""]);
    setGo("cross");
    setWinningMessage("");
  };

  return (
    <main>
      <div className="container">
        {!winningMessage && <div>{`its now ${go} turn!`}</div>}
        <div>{winningMessage}</div>
        <div className="gameboard">
          {cells.map((cell, index) => (
            <Cell id={index} go={go} setGo={setGo} key={index} cells={cells} setCells={setCells} cell={cell} winningMessage={winningMessage} />
          ))}
        </div>
        <button onClick={handleRestart} className="restart-button ">Restart</button>
      </div>
      <p>Created by <a href="https://alial-hamawy07.github.io/Acounts/" className="link">Ali AL-Hamawy</a></p>

    </main>
  );
}

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

