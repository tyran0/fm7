import { useState } from "react";

import Button from "../ui/Button/Button";
import Figure from "../ui/Figure/Figure";

import Scoreboard from "../Scoreboard/Scoreboard";

import usePlayPieces from "./PlayPiece/hooks/usePlayPieces";

import cls from "./Game.module.css";

export default function Game({ playPieces }) {
  const [playerScore, setPlayerScore] = useState(12);

  const {
    isSelected,
    playPiece,
    emptySlot,
    renderPlayPieces,
    resetPlayPieces
  } = usePlayPieces(() => {
    console.log("TEST!");
  }, playPieces);

  return (
    <div style={{ maxWidth: "960px", margin: "0px auto" }}>
      <Scoreboard score={playerScore} />
      {isSelected
        ? <GameResult playPiece={playPiece} emptySlot={emptySlot} />
        : <GameField>{renderPlayPieces}</GameField>}
      <Button onClick={resetPlayPieces} size="large" filled>
        RESET
      </Button>
    </div>
  )
}

function GameResult({ playPiece, emptySlot }) {
  return (
    <div className={cls["game-result"]}>
      <Figure caption="You Picked">{playPiece}</Figure>
      <Figure caption="The House Picked">{emptySlot}</Figure>
    </div>
  );
}

function GameField({ children }) {
  return (
    <div className={cls["game-field"]}>{children()}</div>
  );
}