import cls from "./Button.module.css";

export default function Button({ filled, size, className, children, ...restProps }) {
  const rootClasses = [cls.button];
  if (className) rootClasses.push(className);
  if (filled) rootClasses.push(cls["is-filled"]);
  if (size) rootClasses.push(cls[`size-${size}`]);

  return (
    <button className={rootClasses.join(" ")} { ...restProps }>{children}</button>
  );
}