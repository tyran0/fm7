import { useEffect, useState } from "react";

import Modal from "../ui/Modal/Modal";
import Button from "../ui/Button/Button";

import Scoreboard from "../Scoreboard/Scoreboard";

import PlayPiece from "../PlayPiece/PlayPiece";

import useRockPaperScissors from "./hooks/useRockPaperScissors";

import cls from "./Game.module.css";

const playPieces = [
  {
    id: "paper",
    iconUrl: "/icons/icon-paper.svg",
    iconAlt: "Paper",
    ringOutsetColor: "hsl(230, 89%, 52%)",
    ringColor: "linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
  },
  {
    id: "scissors",
    iconUrl: "/icons/icon-scissors.svg",
    iconAlt: "Scissors",
    ringOutsetColor: "hsl(39, 89%, 39%)",
    ringColor: "linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
  },
  {
    id: "rock",
    iconUrl: "/icons/icon-rock.svg",
    iconAlt: "Rock",
    ringOutsetColor: "hsl(349, 71%, 42%)",
    ringColor: "linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
  }
];

const winningConditions = {
  "paper_rock": true,
  "rock_scissors": true,
  "scissors_paper": true,
}

export default function Game({ defaultScore = 12 }) {
  const [playerScore, setPlayerScore] = useState(defaultScore);

  let lastSavedScore = playerScore;

  useEffect(() => {
    const savedScore = localStorage.getItem("player_score");
    if (!savedScore) return;

    lastSavedScore = +savedScore;
    setPlayerScore(lastSavedScore);
  }, []);

  useEffect(() => {
    localStorage.setItem("player_score", lastSavedScore);
  }, [lastSavedScore]);

  const {
    reset,
    select,
    isSelected,
    playerSelected,
    homeSelected,
    didPlayerWin
  } = useRockPaperScissors(updateScore, playPieces, winningConditions);

  function updateScore(didPlayerWin) {
    setPlayerScore(s => didPlayerWin ? s + 1 : s - 1);
  }

  return (
    <div className={cls.game}>
      <Scoreboard score={playerScore} />
      {isSelected
        ? (
          <div className={cls["game-result"]}>
            <PlayPiece isActive={didPlayerWin} { ...playerSelected } />
            <PlayPiece isActive={!didPlayerWin} { ...homeSelected } />
            <div className={cls["game-result-info"]}> 
              <h1 style={{ color: "#ffffff", fontSize: "3rem" }} >{didPlayerWin ? "YOU WIN" : "YOU LOSE"}</h1>
              <Button onClick={reset} filled size="large">
                PLAY AGAIN
              </Button>
            </div>
          </div>
        )
        : (
          <div className={cls["game-field"]}>
            {playPieces.map((ppc) =>
              <PlayPiece
                key={ppc.id}
                onClick={() => select(ppc.id)}
                { ...ppc }
              />
            )}
          </div>
        )
      }
      <Modal id="rules-modal" label="RULES" style={{ justifySelf: "end" }}>
        <img
          src="/images/image-rules.svg"
          width={304}
          height={270}
          alt="Paper beats Rock, Rock beats Scissors, Scissors beat Paper"
          style={{ width: "100%", height: "auto" }}
        />
      </Modal>
    </div>
  );
}