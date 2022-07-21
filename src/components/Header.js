import React from 'react';
import headerLogoPath from "../images/logo/logo-mesto.svg";

const Header = () => {
    return (
        <header className="header">
            <a href="/">
                <img
                    className="header__logo"
                    src={headerLogoPath}
                    alt="Mesto логотип"
                />
            </a>
        </header>
    );
};

export default Header;
