import React, {useState} from 'react';
import PopupWithForm from "./PopupWithForm";

const Register = (props) => {

    let onRegister = props.onRegister;

    const [newUser, setNewUser] = useState({
        email: '',
        password: '',
    })

    function handleChange(evt) {
        const {name, value} = evt.target;

        setNewUser({
            [name]: value
        });
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
                    name="email"
                    aria-label="Поле ввода электронной почты пользователя"
                    placeholder="Email"
                    onChange={handleChange}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    autoComplete="off"
                    required
                />
                <span className="register-form__input-error register-form__input-email-error"></span>
            </label>
            <label className="register-form__label">
                <input
                    type="password"
                    className="register-form__input register-form__input_type_password"
                    id="register-form-password"
                    name="password"
                    aria-label="Поле ввода пароля"
                    placeholder="Пароль"
                    onChange={handleChange}
                    pattern="(?=.*\d)(?=.*[\W_]).{7,}"
                    minLength="6"
                    maxLength="20"
                    autoComplete="off"
                    required
                />
                <span className="register-form__input-error register-form__input-password-error"></span>
            </label>
        </PopupWithForm>
    );
};

export default Register;
