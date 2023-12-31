import Figure from "../ui/Figure/Figure";
import cls from "./Scoreboard.module.css";

export default function Scoreboard({ score = 0 }) {
  return (
    <div className={cls.scoreboard}>
        <img
          className={cls["scoreboard-logo"]}
          src="/images/logo.svg"
          width={162}
          height={99}
          alt="Rock, Paper, Scissors"
        />
        <Figure
          className={cls["scoreboard-plaque"]}
          caption={<h2 className={cls["scoreboard-label"]}>Score</h2>}
        >
          <div className={cls["scoreboard-value"]}>{score}</div>
        </Figure>
    </div>
  );
}