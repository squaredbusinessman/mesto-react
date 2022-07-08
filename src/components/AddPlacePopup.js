import React from 'react';
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = (props) => {
    return (
        <PopupWithForm
            name="new-post"
            title="Новое место"
            submitButtonTitle="Создать"
            isOpen={props.isOpen}
            onClose={props.onClose}
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
    );
};

export default AddPlacePopup;
