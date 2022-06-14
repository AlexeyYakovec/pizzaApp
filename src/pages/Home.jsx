import React from 'react';
import axios from 'axios';

//components
import Categories from '../components/Categories';
import PizzaCard from '../components/PizzaCard';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaCard/Skeleton';

function Home({ searchValue }) {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCatrgoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({ name: 'популярности', sortProperty: 'rating' });

  console.log(items);
  React.useEffect(() => {
    setIsLoading(true);

    const sortBy = sortType.sortProperty.replace('-', '');
    const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? `category=${categoryId}` : '';

    axios
      .get(
        `https://62a72469bedc4ca6d7c31135.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  const pizzas = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }

      return false;
    })
    .map(({ title, price, imageUrl, sizes, types }) => (
      <PizzaCard title={title} price={price} image={imageUrl} sizes={sizes} types={types} />
    ));

  const skeletons = [...new Array(10)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className='container'>
      <div className='content__top'>
        <Categories catrgoryValue={categoryId} onClickCategory={(id) => setCatrgoryId(id)} />
        <Sort sortValue={sortType} onChangeSort={(id) => setSortType(id)} />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>{isLoading ? skeletons : pizzas}</div>
    </div>
  );
}

export default Home;
