import React from 'react';

function Main(props) {

    return (
        <>
            <main>
                <section className="user">
                    <div className="user__avatar-wrapper">
                        <img
                            className="user__avatar"
                            src="src/components/App#"
                            alt="Аватарка пользователя"
                        />
                        <button
                            onClick={props.onEditAvatar}
                            type="button"
                            className="user__avatar-editor-btn"
                            aria-label="Кнопка редактирования аватара пользователя"
                        ></button>
                    </div>
                    <div className="user__text-wrapper">
                        <h1 className="user__name">User-Name</h1>
                        <button
                            onClick={props.onEditProfile}
                            type="button"
                            className="user__nick-editor-btn"
                            aria-label="Кнопка редактирования Имени и доп. информации пользователя"
                        ></button>
                        <p className="user__about">User-about</p>
                    </div>
                    <button
                        onClick={props.onAddPlace}
                        type="button"
                        className="user__add-post-btn"
                        aria-label="Кнопка создания новой публикации"
                    ></button>
                </section>
                <section>
                    <ul className="cards"></ul>
                </section>
            </main>
        </>
    );
};

export default Main;
