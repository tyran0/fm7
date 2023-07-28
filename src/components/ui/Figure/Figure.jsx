import { joinClasses } from "../../../util/joinClasses";

import cls from "./Figure.module.css";

export default function Figure({ caption, className, children, ...restProps }) {
  return (
    <figure className={joinClasses(cls.figure, className)} { ...restProps } >
        <figcaption>{caption}</figcaption>
        {children}
    </figure>
  );
}