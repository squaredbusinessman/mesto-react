import React from 'react';
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function Main() {

    function HandleEditAvatarClick() {
        document.querySelector('.popup_id_new-avatar').classList.add('popup_visible');
    }

    function HandleEditProfileClick() {
        document.querySelector('.popup_id_profile-edit').classList.add('popup_visible');
    }

    function  HandleAddPlaceClick() {
        document.querySelector('.popup_id_new-post').classList.add('popup_visible');
    }



    return (
        <>
            <main>
                <section className="user">
                    <div className="user__avatar-wrapper">
                        <img
                            className="user__avatar"
                            src="src/components/App#"
                            alt="Аватарка пользователя"
                        />
                        <button
                            onClick={HandleEditAvatarClick}
                            type="button"
                            className="user__avatar-editor-btn"
                            aria-label="Кнопка редактирования аватара пользователя"
                        ></button>
                    </div>
                    <div className="user__text-wrapper">
                        <h1 className="user__name">User-Name</h1>
                        <button
                            onClick={HandleEditProfileClick}
                            type="button"
                            className="user__nick-editor-btn"
                            aria-label="Кнопка редактирования Имени и доп. информации пользователя"
                        ></button>
                        <p className="user__about">User-about</p>
                    </div>
                    <button
                        onClick={HandleAddPlaceClick}
                        type="button"
                        className="user__add-post-btn"
                        aria-label="Кнопка создания новой публикации"
                    ></button>
                </section>
                <section>
                    <ul className="cards"></ul>
                </section>

                <PopupWithForm name="profile-edit" title="Редактировать профиль">
                    <label className="popup__label">
                        <input
                            type="text"
                            className="popup__input popup__input_type_name"
                            id="popup__input-nickname"
                            name="name"
                            aria-label="Поле ввода имени пользователя"
                            minLength="2"
                            maxLength="40"
                            autoComplete="off"
                            required
                        />
                        <span className="popup__input-error popup__input-nickname-error"></span>
                    </label>
                    <label className="popup__label">
                        <input
                            type="text"
                            className="popup__input popup__input_type_about"
                            id="popup__input-about"
                            name="about"
                            aria-label="Поле ввода информации о пользователе"
                            minLength="2"
                            maxLength="200"
                            autoComplete="off"
                            required
                        />
                        <span className="popup__input-error popup__input-about-error"></span>
                    </label>
                </PopupWithForm>

                <PopupWithForm name="new-post" title="Новое место">
                    <label className="popup__label">
                        <input
                            type="text"
                            className="popup__input popup__input_type_name"
                            id="popup__input-place-name"
                            name="name"
                            aria-label="Поле ввода названия"
                            placeholder="Название"
                            minLength="2"
                            maxLength="30"
                            autoComplete="off"
                            required
                        />
                        <span className="popup__input-error popup__input-place-name-error"></span>
                    </label>
                    <label className="popup__label">
                        <input
                            type="url"
                            className="popup__input popup__input_type_about"
                            id="popup__input-src"
                            name="link"
                            aria-label="Поле ввода ссылки"
                            placeholder="Ссылка на картинку"
                            autoComplete="off"
                            required
                        />
                        <span className="popup__input-error popup__input-src-error"></span>
                    </label>
                </PopupWithForm>

                <PopupWithForm name="new-avatar" title="Обновить аватар">
                    <label className="popup__label">
                        <input
                            className="popup__input popup__input_type-url"
                            type="url"
                            id="popup__input-avatar-url"
                            name="newAvatarUrl"
                            placeholder="Ссылка на картинку"
                            aria-label="Поле ввода для ссылки на новый аватар"
                            pattern="https?://.+"
                            required
                        />
                        <span className="popup__input-error popup__input-avatar-url-error"></span>
                    </label>
                </PopupWithForm>

                <PopupWithForm name="delete-confirm" title="Вы уверены?">
                    ''
                </PopupWithForm>

                <ImagePopup />

            </main>
        </>
    );
};

export default Main;
