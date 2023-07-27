import cls from "./Figure.module.css";

export default function Figure({ caption, children, className, ...restProps }) {
  return (
    <figure className={[cls.figure, className].join(" ")} { ...restProps } >
        <figcaption>{caption}</figcaption>
        {children}
    </figure>
  );
}