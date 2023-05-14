import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, textButton }) {
  const [place, setPlace] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    if (isOpen) {
      setPlace("");
      setPhoto("");
    }
  }, [isOpen]);

  function addPlace(e) {
    setPlace(e.target.value);
  }

  function addPhoto(e) {
    setPhoto(e.target.value);
  }

  function handleSubmitNewPlace(e) {
    e.preventDefault();
    onAddPlace({ name: place, link: photo });
  }

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name={"add"}
      title={"Новое место"}
      textButton={textButton ? "Сохранение..." : "Сохранить"}
      typeButton={"submit"}
      method={"post"}
      onSubmit={handleSubmitNewPlace}
    >
      <input
        type="text"
        id="place"
        name="place"
        placeholder="Название"
        required
        className="popup__field popup__field_value_place"
        minLength="2"
        maxLength="30"
        value={place}
        onChange={addPlace}
      />
      <span className="popup__field-error place-field-error"></span>
      <input
        type="url"
        id="photo"
        name="photo"
        placeholder="Ссылка на картинку"
        required
        className="popup__field popup__field_value_photo"
        value={photo}
        onChange={addPhoto}
      />
      <span className="popup__field-error photo-field-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
