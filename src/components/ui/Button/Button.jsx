import cls from "./Button.module.css";

export default function Button({ children, filled, size, ...restProps }) {
  const rootClasses = [cls.button];

  if (filled) rootClasses.push(cls["is-filled"]);
  if (size) rootClasses.push(cls[`size-${size}`]);

  return (
    <button className={rootClasses.join(" ")} { ...restProps }>{children}</button>
  );
}