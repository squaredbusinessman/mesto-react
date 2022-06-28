import React from 'react';

const ImagePopup = () => {
    return (
        <>
            <div className="popup popup_id_big-picture">
                <div className="popup__container">
                    <img
                        className="popup__img"
                        src="src/components/App#"
                        alt=""
                    />
                    <p className="popup__name"></p>
                    <button
                        type="button"
                        className="popup__close-btn"
                        aria-label="Кнопка закрытия попапа"
                    ></button>
                </div>
            </div>
        </>
    );
};

export default ImagePopup;
