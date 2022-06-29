import React from 'react';

const Card = (props) => {

    const [likes, _id, name, link] = props.card;

    return (
        <li className="card" key={_id}>
            <img
                onClick={props.onClick}
                className="card__pic"
                src={link}
                alt={name}
            />
            <div className="card__text-wrapper">
                <h2 className="card__title">{name}</h2>
                <div className="card__like-wrapper">
                    <button
                        type="button"
                        className="card__like"
                        aria-label="Кнопка нравится"
                    ></button>
                    <span className="card__likes-counter">{likes.length}</span>
                </div>
            </div>
            <button
                type="button"
                className="card__remove"
                aria-label="Кнопка удаления поста"
            ></button>
        </li>
    );
};

export default Card;
