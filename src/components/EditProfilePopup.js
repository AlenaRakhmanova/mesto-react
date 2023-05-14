import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, textButton }) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser, isOpen]);

  function changeName(e) {
    setName(e.target.value);
  }

  function changeDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name={"edit"}
      title={"Редактировать профиль"}
      textButton={textButton ? "Сохранение..." : "Сохранить"}
      typeButton={"submit"}
      method={"post"}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Имя"
        required
        className="popup__field popup__field_value_name"
        minLength="2"
        maxLength="40"
        value={name}
        onChange={changeName}
      />
      <span className="popup__field-error name-field-error"></span>
      <input
        type="text"
        id="info"
        name="info"
        placeholder="О себе"
        required
        className="popup__field popup__field_value_info"
        minLength="2"
        maxLength="200"
        value={description}
        onChange={changeDescription}
      />
      <span className="popup__field-error info-field-error"></span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
