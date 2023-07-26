import cls from "./Button.module.css";

export default function Button({ children, ...restProps }) {
  return (
    <button className={cls.button} { ...restProps }>{children}</button>
  );
}