import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />

      <template id="card-template">
        <li className="card">
          <img
              className="card__pic"
              src="src/components/App#"
              alt=""
          />
            <div className="card__text-wrapper">
              <h2 className="card__title">имя карточки</h2>
              <div className="card__like-wrapper">
                <button
                    type="button"
                    className="card__like"
                    aria-label="Кнопка нравится"
                ></button>
                <span className="card__likes-counter"></span>
              </div>
            </div>
            <button
                type="button"
                className="card__remove"
                aria-label="Кнопка удаления поста"
            ></button>
        </li>
      </template>
    </div>
  );
}

export default App;
