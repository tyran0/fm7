import { joinClasses } from "../../util/joinClasses";

import cls from "./PlayPiece.module.css";

export default function PlayPiece({
  iconUrl,
  iconAlt = "",
  ringOutsetColor = "hsl(0, 0%, 56%)",
  ringColor = "hsl(0, 0%, 66%)",
  onClick,
  isActive = false,
  isSlot = false,
}) {
  const Wrapper = onClick ? "button" : "div";

  return (
    <Wrapper
      className={joinClasses(cls.playpiece, [ cls["is-active"], isActive ])}
      style={{ background: isSlot ? "hsl(237, 49%, 15%)" : ringOutsetColor }}
      onClick={onClick}
    >
      <div
        className={cls["playpiece-ring"]}
        style={ isSlot ? null : { background: ringColor } }
      >
        <div className={joinClasses(
          cls["playpiece-face"], [ cls["is-visible"], !isSlot ]
        )}>
          {isSlot || (
            <img
              className={cls["playpiece-icon"]}
              src={iconUrl}
              alt={iconAlt}
            />
          )}
        </div>
      </div>
    </Wrapper>
  );
}