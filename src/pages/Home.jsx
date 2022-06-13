import React from 'react';

import Categories from '../components/Categories';
import PizzaCard from '../components/PizzaCard';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaCard/Skeleton';

function Home() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://628f50ce0e69410599da2f58.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
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
