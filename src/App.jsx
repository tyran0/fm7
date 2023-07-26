import Game from "./components/Game/Game";
import Modal from "./components/ui/Modal/Modal";

import "./App.css";

// TODO:

// 1. Completed!
// 2. Completed!

// 3. <Game /> Component

//   3.1. VISUALS

//     3.1.1. Completed!

//     3.1.2. Position each button on each vertex of a triangle
//            (these are the parts of the <GameField /> component)

//     3.1.3. Completed!

//   3.2. GAME LOGIC

//     3.2.1. Completed!
//     3.2.2. Completed!

//     3.2.3. Inside <GameResult /> render player selected
//            button (which will be highlighted) and an empty
//            slot to display the computer's choice

//     3.2.4. Randomly select either Rock, Paper or Scissors,
//            then play a little cycle animation and finally
//            reveal the computer's choice

//     3.2.5. Display the message telling a player whether they
//            won or lost and the replay button below.

export default function App() {
  return (
    <>
      <Game />
      <Modal label="RULES">
        <img src="/images/image-rules.svg" alt="" />
      </Modal>
      {/*
        You Picked
        The House Picked

        You Win
        You Lose

        Play Again
      */}
    </>
  );
}