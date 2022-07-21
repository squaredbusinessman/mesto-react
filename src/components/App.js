import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import {useEffect, useState} from "react";
import api from "../utils/api";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ConfirmDeletePopup from "./ConfirmDeletePopup";
import {Route, Switch} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";

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

    const [isImagePopupOpen, setImagePopupOpen] = useState(false);

    const [cards, setCards] = useState([]);

    const [loggedIn, setLoggedIn] = useState(true);

    useEffect(() => {
        api.getProfile()
            .then(
            (userData) => {
                setCurrentUser({
                    ...currentUser,
                    name: userData.name,
                    about: userData.about,
                    avatar: userData.avatar,
                    _id: userData._id
                })
            })
            .catch(
                (error) => {
                    console.log(
                        `Произошла ошибка при получении данных профиля пользователя - ${error}`
                );
        })
    }, []);

    useEffect(() => {
        api.getCards().then(
            (cardsData) => {
                setCards(cardsData);
            })
            .catch(
            (error) => {
                console.log(
                    `Произошла ошибка получении карточек с сервера - ${error}`
                );
            }
        )}, []);

    function handleEditAvatarClick() {
        setEditAvatarPopup(true);
    }

    function handleEditProfileClick() {
        setEditProfilePopup(true);
    }

    function  handleAddPlaceClick() {
        setAddPlacePopup(true);
    }

    function closeAllPopups() {
        setEditAvatarPopup(false);
        setEditProfilePopup(false);
        setAddPlacePopup(false);
        setDeleteConfirmPopup(false);
        setImagePopupOpen(false);
        setSelectedCard(null);
    }

    function handleCardClick(cardData) {
        setSelectedCard(cardData);
        setImagePopupOpen(true);
    }

    function handleDeleteConfirmClick(cardData) {
        setDeleteConfirmPopup(true);
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
            .catch(
            (error) => {
                console.log(
                    `Произошла ошибка при обновлении профиля пользователя - ${error}`
                );
            })
    }

    function handleUpdateAvatar(newUrl) {
        api.updateAvatar(newUrl.avatar)
            .then((res) => {
                setCurrentUser({
                    ...currentUser,
                    avatar: res.avatar,
                })

                closeAllPopups();
            })
            .catch(
            (error) => {
                console.log(
                    `Произошла ошибка при обновлении аватара пользователя - ${error}`
                );
            }
        )
    }

    function handleAddPlaceSubmit(newData) {
        api.addCard(newData)
            .then((newCard) => {
                setCards([newCard, ...cards])

                closeAllPopups();
            })
            .catch(
            (error) => {
                console.log(
                    `Произошла ошибка при создании новой карточки - ${error}`
                );
            }
        )
    }

    function handleCardLike(card) {
        // проверяем лайк
        const isLiked = card.likes.some(like => like._id === currentUser._id);
        // отправляем запрос в АПИ и получаем обновленные данные карточки
        api.changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
                setCards(
                    (state) => state.map(
                        c => c._id === card._id ? newCard : c
                    )
                )
            })
            .catch(
            (error) => {
                console.log(
                    `Произошла ошибка при лайке/дизлайке карточки - ${error}`
                );
            }
        );
    }

    function handleCardRemove(card) {
        api.deleteCard(card._id)
            .then(() => {

                setCards(
                    (state) => state.filter((
                            c => c._id !== card._id
                        )
                    ))
            })
            .catch(
            (error) => {
                console.log(
                    `Произошла ошибка при удалении карточки - ${error}`
                );
            }
        )
    }

    const email = '';

    function onSignOut() {}

    function onLogin() {
        setLoggedIn(true);
    }

    function onRegister() {}

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="App">
                <Header email={email} onSignOut={onSignOut} />
                <Switch>
                    <ProtectedRoute
                        exact
                        path="/"
                        component={Main}
                        loggedIn={loggedIn}
                        onEditAvatar={handleEditAvatarClick}
                        onEditProfile={handleEditProfileClick}
                        onAddPlace={handleAddPlaceClick}
                        onCardClick={handleCardClick}
                        onRemoveBtnClick={handleDeleteConfirmClick}
                        cards={cards}
                        onCardLike={handleCardLike}
                    ></ProtectedRoute>
                    <Route path="/sign-in">
                        <Login onLogin={onLogin} />
                    </Route>
                    <Route path="/sign-up">
                        <Register onRegister={onRegister} />
                    </Route>
                </Switch>
                    <Footer />
                    <EditProfilePopup
                        isOpen={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
                        onUpdateUserProfile={handleUpdateProfile}
                    />
                    <AddPlacePopup
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
                        onAddPlace={handleAddPlaceSubmit}
                    />
                    <EditAvatarPopup
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                        onUpdateAvatar={handleUpdateAvatar}
                    />
                    <ConfirmDeletePopup
                        name="delete-confirm"
                        wrapperClass="popup__wrapper_type_confirm"
                        title="Вы уверены?"
                        submitButtonTitle="Да"
                        onRemoveCard={handleCardRemove}
                        isOpen={isDeleteConfirmPopupOpen}
                        onClose={closeAllPopups}
                        card={selectedCard}
                    />
                    <ImagePopup
                        card={selectedCard}
                        isOpen={isImagePopupOpen}
                        onClose={closeAllPopups}
                    />
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
