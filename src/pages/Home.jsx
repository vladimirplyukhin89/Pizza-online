import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import PizzaSkeleton from "../components/PizzaBlock/PizzaSkeleton";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(true);
  const URL = "https://628c9991a3fd714fd0354f8b.mockapi.io/items";

  React.useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        if (json.length > 0) {
          setisLoading(false);
        }
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>

      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <PizzaSkeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
