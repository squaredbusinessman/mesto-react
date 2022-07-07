import {useContext, useEffect, useState} from "react";
import api from "../utils/api";
import Card from "./Card";
import {CurrentUserContext} from "../contexts/CurrentUserContext";

function Main(props) {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [cards, setCards] = useState([]);

    const currentUser = useContext(CurrentUserContext);

    function handleCardLike(card) {
        // проверяем лайк
        const isLiked = card.likes.some(like => like._id === currentUser._id);
        // отправляем запрос в АПИ и получаем обновленные данные карточки
        api.changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
            setCards(
                (state) => state.map(
                    c => c._id === card._id ? newCard : c
                )
            )
        });
    }

    function handleCardRemove(card) {
        api.deleteCard(card._id)
            .then(() => {
                setCards(
                    (state) => state.filter((
                        c => c._id !== card._id
                    )
                ))
            })
    }

    useEffect(() => {

        api.getCards().then(
            (cardsData) => {
                setIsLoaded(true);
                setCards(cardsData);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )}, []);

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <>
                <main>
                    <section className="user">
                        <div className="user__avatar-wrapper">
                            <img
                                className="user__avatar"
                                src={currentUser.avatar}
                                alt="Аватарка пользователя"
                            />
                            <button
                                onClick={props.onEditAvatar}
                                type="button"
                                className="user__avatar-editor-btn"
                                aria-label="Кнопка редактирования аватара пользователя"
                            ></button>
                        </div>
                        <div className="user__text-wrapper">
                            <h1 className="user__name">{currentUser.name}</h1>
                            <button
                                onClick={props.onEditProfile}
                                type="button"
                                className="user__nick-editor-btn"
                                aria-label="Кнопка редактирования Имени и доп. информации пользователя"
                            ></button>
                            <p className="user__about">{currentUser.about}</p>
                        </div>
                        <button
                            onClick={props.onAddPlace}
                            type="button"
                            className="user__add-post-btn"
                            aria-label="Кнопка создания новой публикации"
                        ></button>
                    </section>
                    <section>
                        <ul className="cards">
                            {cards.map(card => (
                                <Card
                                    key={card._id}
                                    card={card}
                                    onCardClick={props.onCardClick}
                                    onCardLike={handleCardLike}
                                    onCardRemove={handleCardRemove}
                                    onRemoveBtnClick={props.onRemoveBtnClick}
                                />
                            ))}
                        </ul>
                    </section>
                </main>
            </>
        );
    }
}

export default Main;
