import React from 'react';

/* Компонент для общего кода попапов:
        - «Редактировать профиль» profile-edit
        - «Новое место» new-post
        - «Обновить аватар» new-avatar
        - «Вы уверены?» delete-confirm
*/

function PopupWithForm(props) {

    return (
        <>
            <div className={`popup popup_id_${props.name} ${props.isOpen ? 'popup_visible' : ''}`}>
                <div className={`popup__wrapper ${props.wrapperClass || ''}`}>
                    <h2 className="popup__title">
                        {props.title}
                    </h2>
                    <form
                        className="popup__form"
                        name={props.name}
                        action="src/components/App#"
                        method="post">

                        {props.children}

                        <button
                            type="submit"
                            className="popup__save-btn"
                            aria-label="Кнопка отправки формы"
                        >
                            {props.submitButtonTitle}
                        </button>
                    </form>
                <button
                    onClick={props.onClose}
                    type="button"
                    className="popup__close-btn"
                    aria-label="Кнопка закрытия попапа"
                ></button>
                </div>
            </div>
        </>
    );
}

export default PopupWithForm;
