import cls from "./Figure.module.css";

export default function Figure({ caption, children }) {
  return (
    <figure className={cls.figure}>
        <figcaption className={cls["figure-caption"]}>{caption}</figcaption>
        {children}
    </figure>
  );
}