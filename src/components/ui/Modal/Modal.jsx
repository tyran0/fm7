import { joinClasses } from "../../../util/joinClasses";

import { useRef } from "react";

import Button from "../Button/Button";

import cls from "./Modal.module.css";

export default function Modal({ label, id, className, style, children, ...restProps }) {
  const modalRef = useRef(null);

  function openModal() {
    modalRef.current.showModal();
  }

  function closeModal() {
    modalRef.current.close();
  }

  return (
    <>
      <dialog ref={modalRef} id={id} className={joinClasses(cls.modal, className)}>
        <header className={cls["modal-head"]}>
          <h2 className={cls["modal-title"]}>{label}</h2>
          <button onClick={closeModal} className={joinClasses(cls["modal-button"], cls["on-desktop"])}>
            <svg style={{ display: "block" }} width="20" height="20">
              <path fill="#3B4262" fillRule="evenodd" d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z" opacity=".25"/>
            </svg>
          </button>
        </header>
        <div className={cls["modal-inner"]}>
         {children}
        </div>
        <button onClick={closeModal} className={joinClasses(cls["modal-button"], cls["on-mobile"])}>
          <svg style={{ display: "block" }} width="20" height="20">
            <path fill="#3B4262" fillRule="evenodd" d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z" opacity=".25"/>
          </svg>
        </button>
      </dialog>
      <Button aria-controls={id} onClick={openModal} style={style} {...restProps}>
        {label}
      </Button>
    </>
  );
}