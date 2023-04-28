import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isCardImageOpen, setCardImageOpen] = useState(false);

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setCardImageOpen(true);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({});
    setCardImageOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name={"edit"}
        title={"Редактировать профиль"}
        textButton={"Сохранить"}
        typeButton={"submit"}
        method={"post"}
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
        />
        <span className="popup__field-error info-field-error"></span>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name={"add"}
        title={"Новое место"}
        textButton={"Сохранить"}
        typeButton={"submit"}
        method={"post"}
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
        />
        <span className="popup__field-error place-field-error"></span>
        <input
          type="url"
          id="photo"
          name="photo"
          placeholder="Ссылка на картинку"
          required
          className="popup__field popup__field_value_photo"
        />
        <span className="popup__field-error photo-field-error"></span>
      </PopupWithForm>
      <ImagePopup onClose={closeAllPopups} card={selectedCard} isOpen={isCardImageOpen} />
      <PopupWithForm
        // isOpen={isEditAvatarPopupOpen}
        name={"confirmation"}
        title={"Вы уверены?"}
        textButton={"Да"}
        typeButton={"button"}
      ></PopupWithForm>
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name={"update-avatar"}
        title={"Обновить аватар"}
        textButton={"Сохранить"}
        typeButton={"submit"}
        method={"post"}
      >
        <input
          type="url"
          id="picture"
          name="picture"
          placeholder="Ссылка на картинку"
          required
          className="popup__field popup__field_value_picture"
        />
        <span className="popup__field-error picture-field-error"></span>
      </PopupWithForm>
    </div>
  );
}

export default App;
