import { useState, useEffect } from "react";
import { api } from "../utils/Api.js";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getInfoUser()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    api
      .getAllCards(cards)
      .then((data) => {
        console.log(data);
        const results = data.map((item) => ({
          link: item.link,
          name: item.name,
          id: item._id,
          owner: item.owner._id,
          likes: item.likes,
          likes_id: item.likes._id,
        }));
        setCards(results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__flex">
          <div className="profile__container-avatar" onClick={onEditAvatar}>
            <img className="profile__avatar" src={userAvatar} alt="аватар" />
          </div>
          <div className="profile__info">
            <h1 className="profile__full-name">{userName}</h1>
            <button
              type="button"
              className="profile__button-edit opacity-hover"
              onClick={onEditProfile}
            ></button>
            <p className="profile__information">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__button-add opacity-hover"
          onClick={onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            handleCardClick={onCardClick}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
