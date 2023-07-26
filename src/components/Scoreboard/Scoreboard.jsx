import cls from "./Scoreboard.module.css";

export default function Scoreboard({ score = 0 }) {
  return (
    <div className={cls.scoreboard}>
        <img
          style={{ display: "block" }}
          src="/images/logo.svg"
          alt="Rock, Paper, Scissors"
        />
        <figure className={cls["scoreboard-plaque"]}>
            <figcaption className={cls["scoreboard-label"]}>Score</figcaption>
            <div className={cls["scoreboard-value"]}>{score}</div>
        </figure>
    </div>
  );
}