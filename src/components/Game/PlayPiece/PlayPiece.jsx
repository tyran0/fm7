import cls from "./PlayPiece.module.css";

export default function PlayPiece({
  clickHandler,
  playPiece,
  isSlot = false,
  isSelected = false,
  ...restProps
}) {
  if (isSlot) return (
    <div className={[cls["playpiece"], cls["is-slot"]].join(" ")}>
      <div className={cls["playpiece-ring"]}></div>
    </div>
  );

  const Wrapper = isSelected ? "div" : "button";

  return (
    <Wrapper
      onClick={isSelected ? null : clickHandler}
      className={cls["playpiece"]}
      style={{
        marginRight: isSelected ? 112 : "intial",
        background: playPiece.shadow,
        animation: isSelected ? "gradual-highlight 150ms forwards" : "none",
      }}
      { ...restProps }
    >
      <div
        className={cls["playpiece-ring"]}
        style={{ background: playPiece.ring }}
      >
        <div className={cls["playpiece-inner"]}>
          {playPiece.icon}
        </div>
      </div>
    </Wrapper>
  );
}