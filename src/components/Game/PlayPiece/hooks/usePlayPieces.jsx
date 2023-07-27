import { useCallback, useRef, useState } from "react";

import PlayPiece from "../PlayPiece";

export default function usePlayPieces(onResult, playPieces) {
  const [isSelected, setIsSelected] = useState(false);
  const playPiece = useRef(null);
  const emptySlot = useRef(null);

  function select(index) {
    const randomIndex = Math.floor(Math.random() * playPieces.lenght);
    const versusPPC = playPieces[randomIndex];
    emptySlot.current = <PlayPiece playPiece={versusPPC} isSlot={true} />;

    const currentPPC = playPieces[index];
    playPiece.current = <PlayPiece playPiece={currentPPC} isSelected={true} />;
    setIsSelected(true);

    onResult();
  };

  const renderPlayPieces = useCallback(() => {
    return playPieces.map((ppc, i) =>
      <PlayPiece
        key={ppc.id}
        playPiece={ppc}
        clickHandler={() => select(i)}
      />
    );
  }, [playPieces]);

  const resetPlayPieces = useCallback(() => {
    emptySlot.current = null;
    playPiece.current = null;
    setIsSelected(false);
  }, []);

  return {
    isSelected,
    playPiece: playPiece.current,
    emptySlot: emptySlot.current,
    renderPlayPieces,
    resetPlayPieces
  };
}