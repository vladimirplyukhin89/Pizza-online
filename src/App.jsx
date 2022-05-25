import React from "react";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

import "./scss/app.scss";

function App() {
  const [items, setItems] = React.useState([]);
  const URL = "https://628c9991a3fd714fd0354f8b.mockapi.io/items";

  React.useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>

          <div className="content__items">
            {items.map((obj) => (
              <PizzaBlock key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
