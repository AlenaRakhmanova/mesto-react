function ImagePopup({ card, onClose, isOpen }) {
  return (
    <div className={`popup popup_image ${isOpen && "popup_opened"}`}>
      <div className="popup__container popup__container_content_images">
        <img className="popup__image" src={card.link} alt={card.name} />
        <button
          type="button"
          className="popup__button-close opacity-hover"
          onClick={onClose}
        ></button>
        <h3 className="popup__title popup__title_image">{card.name}</h3>
      </div>
    </div>
  );
}

export default ImagePopup;
