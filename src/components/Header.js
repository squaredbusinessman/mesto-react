import React from 'react';
import headerLogoPath from "../images/logo/logo-mesto.svg";
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <header className="header">
            <a href="/">
                <img
                    className="header__logo"
                    src={headerLogoPath}
                    alt="Mesto логотип"
                />
            </a>
            <Link
                to="/sign-up"
                className={`header__link ${props.loggedIn && 'visually_hidden'}`}
            >
                Регистрация
            </Link>
            <Link
                to="/sign-in"
                className={`header__link ${props.loggedIn && 'visually_hidden'}`}
            >
                Войти
            </Link>
        </header>
    );
};

export default Header;
