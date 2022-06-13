import React from 'react';

import axios from 'axios';

import Categories from '../components/Categories';
import PizzaCard from '../components/PizzaCard';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaCard/Skeleton';

function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    axios.get('https://62a72469bedc4ca6d7c31135.mockapi.io/items').then((res) => {
      setItems(res.data);
      setIsLoading(false);
      console.log(res.data);
    });
  }, []);

  return (
    <>
      <div className='content__top'>
        <Categories />
        <Sort />
      </div>
      <h2 className='content__title'>Все пиццы</h2>
      <div className='content__items'>
        {}
        {isLoading
          ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
          : items.map(({ title, price, imageUrl, sizes, types }) => (
              <PizzaCard title={title} price={price} image={imageUrl} sizes={sizes} types={types} />
            ))}
      </div>
    </>
  );
}

export default Home;
