import cls from "./Figure.module.css";

export default function Figure({ caption, className, children, ...restProps }) {
  const rootClasses = [cls.figure];
  if (className) rootClasses.push(className);

  return (
    <figure className={rootClasses.join(" ")} { ...restProps } >
        <figcaption>{caption}</figcaption>
        {children}
    </figure>
  );
}