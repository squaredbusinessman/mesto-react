import React from 'react';

const Card = (props) => {

    function selectedCardClick() {
        props.onCardClick(props.card);
    }


    return (
        <>
            <li className="card">
                <img
                    onClick={selectedCardClick}
                    className="card__pic"
                    src={props.card.link}
                    alt={props.card.name}
                />
                <div className="card__text-wrapper">
                    <h2 className="card__title">{props.card.name}</h2>
                    <div className="card__like-wrapper">
                        <button
                            type="button"
                            className="card__like"
                            aria-label="Кнопка нравится"
                        ></button>
                        <span className="card__likes-counter">{props.card.likes.length}</span>
                    </div>
                </div>
                <button
                    onClick={props.onRemoveBtnClick}
                    type="button"
                    className="card__remove"
                    aria-label="Кнопка удаления поста"
                ></button>
            </li>
        </>
    );
};

export default Card;
