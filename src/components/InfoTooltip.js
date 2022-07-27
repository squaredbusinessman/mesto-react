import React from 'react';

const InfoTooltip = (props) => {
    return (
        <div className={`popup popup_id_info-tooltip ${props.isOpen && 'popup_visible'}`}>
            <div className="popup__container popup__container_type_tooltip">
                <img
                    className="popup__img popup__img_type_tooltip"
                    src="../images/tooltip/failure.svg"
                    alt="иконка неудачной попытки входа в аккаунт"
                />
                <p className="popup__name popup__name_type_tooltip">Что-то пошло не так! Попробуйте ещё раз.</p>
                <button
                    onClick={props.onClose}
                    type="button"
                    className="popup__close-btn"
                    aria-label="Кнопка закрытия попапа"
                ></button>
            </div>
        </div>
    );
};

export default InfoTooltip;
