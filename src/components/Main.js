import React from 'react';

const Main = () => {
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
                            type="button"
                            className="user__avatar-editor-btn"
                            aria-label="Кнопка редактирования аватара пользователя"
                        ></button>
                    </div>
                    <div className="user__text-wrapper">
                        <h1 className="user__name">User-Name</h1>
                        <button
                            type="button"
                            className="user__nick-editor-btn"
                            aria-label="Кнопка редактирования Имени и доп. информации пользователя"
                        ></button>
                        <p className="user__about">User-about</p>
                    </div>
                    <button
                        type="button"
                        className="user__add-post-btn"
                        aria-label="Кнопка создания новой публикации"
                    ></button>
                </section>
                <section>
                    <ul className="cards"></ul>
                </section>


                <div className="popup popup_id_profile-edit">
                    <div className="popup__wrapper">
                        <h2 className="popup__title">Редактировать профиль</h2>
                        <form
                            className="popup__form"
                            name="editProfileForm"
                            action="src/components/App#"
                            method="post">
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
                            <button
                                type="submit"
                                className="popup__save-btn"
                                aria-label="Кнопка отправки формы"
                                disabled
                            >
                                Сохранить
                            </button>
                        </form>
                        <button
                            type="button"
                            className="popup__close-btn"
                            aria-label="Кнопка закрытия попапа"
                        ></button>
                    </div>
                </div>


                <div className="popup popup_id_new-post">
                    <div className="popup__wrapper">
                        <h2 className="popup__title">Новое место</h2>
                        <form
                            className="popup__form"
                            name="newPostForm"
                            action="src/components/App#"
                            method="post">
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
                            <button
                                type="submit"
                                className="popup__save-btn"
                                aria-label="Кнопка отправки формы"
                                disabled
                            >
                                Создать
                            </button>
                        </form>
                        <button
                            type="button"
                            className="popup__close-btn"
                            aria-label="Кнопка закрытия попапа"
                        ></button>
                    </div>
                </div>


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


                <div className="popup popup_id_delete-confirm">
                    <form className="popup__form popup__form_type_confirm"
                          name="deleteConfirmForm"
                          action="src/components/App#"
                          method="post">
                        <h2 className="popup__title">
                            Вы уверены?
                        </h2>
                        <button
                            type="submit"
                            className="popup__save-btn"
                            aria-label="Кнопка отправки формы"
                        >
                            Да
                        </button>
                        <button
                            type="button"
                            className="popup__close-btn"
                            aria-label="Кнопка закрытия попапа"
                        ></button>
                    </form>
                </div>


                <div className="popup popup_id_new-avatar">
                    <form className="popup__form popup__form_type_avatar"
                          name="updateAvatar"
                          action="src/components/App#"
                          method="post">
                        <h2 className="popup__title">
                            Обновить аватар
                        </h2>
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
                        <button
                            type="submit"
                            className="popup__save-btn"
                            aria-label="Кнопка отправки формы"
                            disabled
                        >
                            Сохранить
                        </button>
                        <button
                            type="button"
                            className="popup__close-btn"
                            aria-label="Кнопка закрытия попапа"
                        ></button>
                    </form>
                </div>

            </main>
        </>
    );
};

export default Main;
