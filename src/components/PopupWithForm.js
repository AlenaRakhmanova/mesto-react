function PopupWithForm({
  isOpen,
  onClose,
  name,
  title,
  textButton,
  typeButton,
  method,
  children,
  onSubmit,
}) {
  return (
    <div className={`popup popup_${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__button-close opacity-hover"
          onClick={onClose}
        ></button>
        <h3 className="popup__title">{title}</h3>
        <form
          name={`form-${name}`}
          method={method}
          className={`popup__form popup__form_func_${name}`}
          onSubmit={onSubmit}
          noValidate
        >
          {children}
          <button type={typeButton} className="popup__button-save">
            {textButton}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
