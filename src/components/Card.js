function Card({ card, handleCardClick }) {
 
  function onCardClick() {
    handleCardClick(card);
  }

  return (
    <div className="elements__place">
      <img className="elements__image" src={card.link} alt={card.name} onClick={onCardClick} />
      <button type="button" className="elements__button-delete opacity-hover"></button>
      <div className="elements__caption">
        <h3 className="elements__title">{card.name}</h3>
        <div className="elements__likes">
          <button type="button" className="elements__button-like"></button>
          <span className="elements__number-like">{card.likes.length}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
