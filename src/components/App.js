import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import {useEffect, useState} from "react";
import api from "../utils/api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";

function App() {

    const [currentUser, setCurrentUser] = useState({
        name: '',
        about: '',
        avatar: '',
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
                    _id: userData._id
                })
            },
            (error) => {
                console.log(error);
            }
        )
    }, [currentUser]);

  return (
     <div className="App">
        <CurrentUserContext.Provider value={currentUser}>
            <Header />
            <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={handleCardClick}
                onRemoveBtnClick={handleDeleteConfirmClick}
            />
            <Footer />

            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />

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
        </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
