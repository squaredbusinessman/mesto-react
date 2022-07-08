import React from 'react';
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = (props) => {
    return (
        <PopupWithForm
            name="new-avatar"
            wrapperClass="popup__wrapper_type_avatar"
            title="Обновить аватар"
            submitButtonTitle="Сохранить"
            isOpen={props.isOpen}
            onClose={props.onClose}
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
    );
};

export default EditAvatarPopup;
