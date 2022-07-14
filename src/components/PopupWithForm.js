import React, {useEffect} from 'react';

function PopupWithForm(props) {

    useEffect(() => {
        function handleEscClose(evt) {
            if (evt.key === 'Escape') {
                props.onClose();
            }
        }

        document.onkeydown = handleEscClose;
    }, []);

    useEffect(() => {
        function handleOverlayClose(evt) {
            evt.stopPropagation();
            if (evt.target.classList.contains('popup_visible')) {
                props.onClose();
            }
        }

        document.onmousedown = handleOverlayClose;
    }, []);

    return (
        <div className={`popup popup_id_${props.name} ${props.isOpen && 'popup_visible'}`}>
            <div className={`popup__wrapper ${props.wrapperClass || ''}`}>
                <h2 className="popup__title">
                    {props.title}
                </h2>
                <form
                    className="popup__form"
                    name={props.name}
                    action="src/components/App#"
                    method="post"
                    onSubmit={props.onSubmit}>

                    {props.children}

                    <button
                        type="submit"
                        className="popup__save-btn"
                        aria-label="Кнопка отправки формы"
                    >
                        {props.submitButtonTitle}
                    </button>
                </form>
            <button
                onClick={props.onClose}
                type="button"
                className="popup__close-btn"
                aria-label="Кнопка закрытия попапа"
            ></button>
            </div>
        </div>
    );
}

export default PopupWithForm;
