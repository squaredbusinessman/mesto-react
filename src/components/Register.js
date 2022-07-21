import React, {useState} from 'react';
import PopupWithForm from "./PopupWithForm";

const Register = (props) => {

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

        if (newUser.password) {}
    }

    return (
        <PopupWithForm
            formClassName="register"
            name="register"
            wrapperClass="register__wrapper"
            title="Регистрация"
            submitButtonTitle="Зарегистрироваться"
            onSubmit={handleSubmit}
            isRegisterForm={true}
        >
            <label className="register__label">
                <input
                    type="email"
                    className="register__input register_type_email"
                    id="register-email"
                    name="email"
                    aria-label="Поле ввода электронной почты пользователя"
                    placeholder="Email"
                    onChange={handleChange}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    autoComplete="off"
                    required
                />
                <span className="register__input-error register__input-error_type_email"></span>
            </label>
            <label className="register__label">
                <input
                    type="password"
                    className="register__input register__input_type_password"
                    id="register-password"
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
                <span className="register__input-error register__input-error_type_password"></span>
            </label>
        </PopupWithForm>
    );
};

export default Register;
