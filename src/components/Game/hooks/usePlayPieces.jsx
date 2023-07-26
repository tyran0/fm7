import { useCallback, useState } from "react";

import cls from "../Game.module.css";

export default function usePlayPieces(onSelect, playPieces) {
  const [isSelected, setIsSelected] = useState(false);
  const [playPiece, setPlayPiece] = useState(null);

  const select = useCallback((index) => {
    const playPiece = playPieces[index];
    setPlayPiece(<PlayPiece playPiece={playPiece} />);
    onSelect(playPiece, index, playPieces);
    setIsSelected(true);
  }, [playPieces])

  function renderPlayPieces() {
    return playPieces.map((pp, i) =>
      <PlayPiece
        key={pp.id}
        playPiece={pp}
        clickHandler={() => select(i)}
      />
    );
  }

  return { isSelected, playPiece, renderPlayPieces };
}

function PlayPiece({ clickHandler, playPiece }) {
  return (
    <button
      onClick={clickHandler}
      className={cls["game-playpiece"]}
      style={{
        marginBottom: 8,
        background: playPiece.background,
        filter: `drop-shadow(0px 8px 0px ${playPiece.shadowColor})`
      }}
    >
      <div className={cls["game-playpiece-inner"]}>
        {playPiece.icon}
      </div>
    </button>
  );
}