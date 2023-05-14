import { useRef, useEffect, useState } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();
  const [textButton, setTextButton] = useState("Сохранить");

  function handleSubmitAvatar(e) {
    e.preventDefault();
    setTextButton("Сохранение...");
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  useEffect(() => {
    if (isOpen) {
      avatarRef.current.value = "";
      setTextButton("Сохранить");
    }
  }, [isOpen]);

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name={"update-avatar"}
      title={"Обновить аватар"}
      textButton={textButton}
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
