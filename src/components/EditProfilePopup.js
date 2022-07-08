import React, {useState} from 'react';
import PopupWithForm from "./PopupWithForm";

const EditProfilePopup = (props) => {

    const [name, setName] = useState('');
    const [about, setAbout] = useState('');

    function handleChange(evt) {
        evt.target.classList.contains('popup__input_type_name')
            ?
            setName(evt.target.value)
            :
            setAbout(evt.target.value);
    }

    return (
        <PopupWithForm
            name="profile-edit"
            wrapperClass="popup__wrapper_type"
            title="Редактировать профиль"
            submitButtonTitle="Сохранить"
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <label className="popup__label">
                <input
                    type="text"
                    className="popup__input popup__input_type_name"
                    id="popup__input-nickname"
                    name="name"
                    aria-label="Поле ввода имени пользователя"
                    value={name}
                    onChange={handleChange}
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
                    value={about}
                    onChange={handleChange}
                    minLength="2"
                    maxLength="200"
                    autoComplete="off"
                    required
                />
                <span className="popup__input-error popup__input-about-error"></span>
            </label>
        </PopupWithForm>
    );
};

export default EditProfilePopup;
