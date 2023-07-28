import { useState, useMemo, useCallback } from "react";

export default function useRockPaperScissors(callback, playPieces, winningConditions) {
  const [isSelected, setIsSelected] = useState(false);
  const [didPlayerWin, setDidPlayerWin] = useState(false);

  const [homeSelected, setHomeSelected] = useState(null);
  const [playerSelected, setPlayerSelected] = useState(null);

  const indexedPlayPieces = useMemo(() => playPieces.reduce(
    (acc, item) => ({ ...acc, [item.id]: item}), {}),
    []
  );

  const reset = useCallback(() => setIsSelected(false), []);

  function runMatch(selectedId, randomId) {
    if (winningConditions[`${selectedId}_${randomId}`]) {
      setDidPlayerWin(true);
      callback(true);
    } else {
      setDidPlayerWin(false);
      callback(false);
    }
  }

  const select = useCallback((selectedKey) => {
    setIsSelected(true);
    setPlayerSelected(indexedPlayPieces[selectedKey]);

    const availablePlayPieces = { ...indexedPlayPieces };
    delete availablePlayPieces[selectedKey]; 

    const ids = Object.keys(availablePlayPieces);
    const randomIndex = Math.floor(Math.random() * ids.length);
    const randomKey = ids[randomIndex];

    setHomeSelected(indexedPlayPieces[randomKey]);
    runMatch(selectedKey, randomKey);
  }, [])

  return {
    reset,
    select,
    isSelected,
    playerSelected,
    homeSelected,
    didPlayerWin
  };
}