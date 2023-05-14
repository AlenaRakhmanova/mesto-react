import { useRef, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, textButton }) {
  const avatarRef = useRef();

  function handleSubmitAvatar(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  useEffect(() => {
    if (isOpen) {
      avatarRef.current.value = "";
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name={"update-avatar"}
      title={"Обновить аватар"}
      textButton={textButton ? "Сохранение..." : "Сохранить"}
      typeButton={"submit"}
      method={"post"}
      onSubmit={handleSubmitAvatar}
    >
      <input
        type="url"
        id="picture"
        name="picture"
        placeholder="Ссылка на картинку"
        required
        className="popup__field popup__field_value_picture"
        ref={avatarRef}
      />
      <span className="popup__field-error picture-field-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
