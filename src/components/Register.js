import React from 'react';
import {useState} from "@types/react";
import PopupWithForm from "./PopupWithForm";

const Register = (props) => {

    const [newUser, setNewUser] = useState({
        email: '',
        password: '',
    })

    function handleChange(evt) {
        const {name, value} = evt.target;

        set`${name}`(value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        if (newUser.password) {

        }
    }

    return (
        <PopupWithForm
            formClassName="register-form"
            name="register"
            wrapperClass=""
            title="Регистрация"
            submitButtonTitle="Зарегистрироваться"
            onSubmit={handleSubmit}
            isRegisterForm={true}
        >
            <label className="register-form__label">
                <input
                    type="email"
                    className="register-form__input register-form_type_email"
                    id="register-form-email"
                    name="Email"
                    aria-label="Поле ввода электронной почты пользователя"
                    value={name}
                    onChange={handleChange}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
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
                    onChange={handleAboutChange}
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

export default Register;
