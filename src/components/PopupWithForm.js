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
            {
                (props.name === 'profile-edit' || props.name === 'new-post')
                ?
                <div className={`popup popup_id_${props.name} ${props.isOpen ? 'popup_visible' : ''}`}>
                    <div className="popup__wrapper">
                        <h2 className="popup__title">{props.title}</h2>
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
                                disabled
                            >
                                {
                                    (props.name === 'profile-edit')
                                        ?
                                        `Сохранить`
                                        :
                                        `Создать`
                                }
                            </button>
                        </form>
                    <button
                        type="button"
                        className="popup__close-btn"
                        aria-label="Кнопка закрытия попапа"
                    ></button>
                    </div>
                </div>
                :
                <div className={`popup popup_id_${props.name} ${props.isOpen ? 'popup_visible' : ''}`}>
                    <form className="popup__form popup__form_type_avatar"
                          name={props.name}
                          action="src/components/App#"
                          method="post">
                        <h2 className="popup__title">
                            {props.title}
                        </h2>

                        {props.children}

                        <button
                            type="submit"
                            className="popup__save-btn"
                            aria-label="Кнопка отправки формы"
                            disabled
                        >
                            {
                                (props.name === 'new-avatar')
                                    ?
                                    `Сохранить`
                                    :
                                    `Да`
                            }
                        </button>
                        <button
                            type="button"
                            className="popup__close-btn"
                            aria-label="Кнопка закрытия попапа"
                        ></button>
                    </form>
                </div>
            }
        </>
    );
};

export default PopupWithForm;
