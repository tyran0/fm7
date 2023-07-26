import { useRef } from "react";

import Button from "../Button/Button";

import cls from "./Modal.module.css";

export default function Modal({ label = "Modal", children }) {
  const modalRef = useRef(null);

  function openModal() {
    modalRef.current.showModal();
  }

  function closeModal() {
    modalRef.current.close();
  }

  return (
    <>
      <dialog ref={modalRef} className={cls.modal}>
        <header className={cls["modal-head"]}>
          <h2 className={cls["modal-title"]}>{label}</h2>
          <button onClick={closeModal} className={cls["modal-button"]}>
            <svg style={{ display: "block" }} width="20" height="20">
              <path fill="#3B4262" fillRule="evenodd" d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z" opacity=".25"/>
            </svg>
          </button>
        </header>
        <div className={cls["modal-inner"]}>
         {children}
        </div>
      </dialog>
      <Button onClick={openModal}>
        {label}
      </Button>
    </>
  );
}