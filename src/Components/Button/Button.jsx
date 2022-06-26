import s from "./Button.module.css";

function BackButton() {
  return (
    <button type="button" className={s.btn}>
      Back
    </button>
  );
}

export { BackButton };
