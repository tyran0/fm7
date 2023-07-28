import { joinClasses } from "../../../util/joinClasses";

import cls from "./Button.module.css";

export default function Button({ filled, size, className, children, ...restProps }) {
  return (
    <button
      className={joinClasses(
        cls.button,
        className,
        [ cls["is-filled"], filled ],
        [ cls[`size-${size}`], size ]
      )}
      { ...restProps }
    >{children}</button>
  );
}