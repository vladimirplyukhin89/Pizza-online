import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import PizzaSkeleton from "../components/PizzaBlock/PizzaSkeleton";

const Home = ({ searchValue }) => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: "популярности (DESC)",
    sortProperty: "rating",
  });

  React.useEffect(() => {
    setisLoading(true);

    const URL = `https://628c9991a3fd714fd0354f8b.mockapi.io/items?`;
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const sortBy = sortType.sortProperty.replace("-", "");
    const order = sortType.sortProperty.includes("-") ? "asc" : "desc";
    //** Сортировка пицц из инпута на бэкэнде */
    const search = searchValue ? `search=${searchValue}` : "";

    fetch(URL + `${category}&sortBy=${sortBy}&order=${order}&${search}`)
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        if (json.length > 0) {
          setisLoading(false);
        }
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType, searchValue]);

  const skeletons = [...new Array(6)].map((_, index) => (
    <PizzaSkeleton key={index} />
  ));

  //** Сортировка пицц из инпута на фронте для статичных данных*/
  const pizzas = items
    //.filter((obj) => {
    //  if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
    //    return true;
    //  }
    //  return false;
    //})
    .map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  return (
    <div div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(i) => setCategoryId(i)}
        />

        <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>

      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
    </div>
  );
};

export default Home;
