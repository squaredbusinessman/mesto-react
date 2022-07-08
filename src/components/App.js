import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import {useEffect, useState} from "react";
import api from "../utils/api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

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
    }, []);

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

    function handleUpdateProfile(data) {
        api.updateProfile(data)
            .then((res) => {

                setCurrentUser({
                    ...currentUser,
                    name: res.name,
                    about: res.about,
                })

                closeAllPopups();
            })
    }

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

            <EditProfilePopup
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
                onUpdateUserProfile={handleUpdateProfile}
            />

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

            <EditAvatarPopup
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
            />

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
