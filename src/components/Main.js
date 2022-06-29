import React from 'react';
import api from "../utils/Api";

function Main(props) {

    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [user, setUserData] = React.useState({
        name: '',
        about: '',
        avatar: '',
    });

    React.useEffect(() => {
        api.getProfile().then(
            (userData) => {
                setIsLoaded(true);
                setUserData({
                    ...user,
                    name: userData.name,
                    about: userData.about,
                    avatar: userData.avatar,
                });
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
            )
    }, );

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <>
                <main>
                    <section className="user">
                        <div className="user__avatar-wrapper">
                            <img
                                className="user__avatar"
                                src={user.avatar}
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
                            <h1 className="user__name">{user.name}</h1>
                            <button
                                onClick={props.onEditProfile}
                                type="button"
                                className="user__nick-editor-btn"
                                aria-label="Кнопка редактирования Имени и доп. информации пользователя"
                            ></button>
                            <p className="user__about">{user.about}</p>
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
    }
}

export default Main;
