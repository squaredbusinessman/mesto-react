import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React, {useEffect, useState} from "react";
import api from "../utils/api";

function App() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentUser, setCurrentUser] = useState({
        name: '',
        about: '',
        avatar: '',
        id: '',
    })

    const [selectedCard, setSelectedCard] = useState(null);

    const [isEditProfilePopupOpen, setEditProfilePopup] = useState(false);

    const [isAddPlacePopupOpen, setAddPlacePopup] = useState(false);

    const [isEditAvatarPopupOpen, setEditAvatarPopup] = useState(false);

    const [isDeleteConfirmPopupOpen, setDeleteConfirmPopup] = useState(false);

    function handleEditAvatarClick() {
        setEditAvatarPopup(true);
    }

    function handleEditProfileClick() {
        setEditProfilePopup(true);
    }

    function  handleAddPlaceClick() {
        setAddPlacePopup(true);
    }

    function handleDeleteConfirmClick() {
        setDeleteConfirmPopup(true);
    }

    function closeAllPopups() {
        setEditAvatarPopup(false);
        setEditProfilePopup(false);
        setAddPlacePopup(false);
        setDeleteConfirmPopup(false);
        setSelectedCard(null);
    }

    function handleCardClick(cardData) {
        setSelectedCard(cardData);
    }

    useEffect(() => {
        api.getProfile().then(
            (userData) => {
                setCurrentUser({
                    ...currentUser,
                    name: userData.name,
                    about: userData.about,
                    avatar: userData.avatar,
                    id: userData._id,
                })
            },
            (err) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, []);

  return (
     <div className="App">
        <Header />
        <Main
            onEditAvatar={handleEditAvatarClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onRemoveBtnClick={handleDeleteConfirmClick}
        />
        <Footer />

        <PopupWithForm
            name="profile-edit"
            wrapperClass="popup__wrapper_type"
            title="Редактировать профиль"
            submitButtonTitle="Сохранить"
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
        >
            <label className="popup__label">
                <input
                    type="text"
                    className="popup__input popup__input_type_name"
                    id="popup__input-nickname"
                    name="name"
                    aria-label="Поле ввода имени пользователя"
                    placeholder="Введите имя профиля"
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
                    placeholder="Введите информацию о вас"
                    minLength="2"
                    maxLength="200"
                    autoComplete="off"
                    required
                />
                <span className="popup__input-error popup__input-about-error"></span>
            </label>
        </PopupWithForm>

        <PopupWithForm
            name="new-post"
            title="Новое место"
            submitButtonTitle="Создать"
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
        >
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

        <PopupWithForm
            name="new-avatar"
            wrapperClass="popup__wrapper_type_avatar"
            title="Обновить аватар"
            submitButtonTitle="Сохранить"
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
        >
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

        <PopupWithForm
            name="delete-confirm"
            wrapperClass="popup__wrapper_type_confirm"
            title="Вы уверены?"
            submitButtonTitle="Да"
            isOpen={isDeleteConfirmPopupOpen}
            onClose={closeAllPopups}
        ></PopupWithForm>

        <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
        />
    </div>
  );
}

export default App;
