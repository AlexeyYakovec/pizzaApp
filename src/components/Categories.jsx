import React from 'react';

function Categories({ catrgoryValue, onClickCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <>
      <div className='categories'>
        <ul>
          {categories.map((categoryName, index) => (
            <li
              key={index}
              onClick={() => onClickCategory(index)}
              className={catrgoryValue === index ? 'active' : ''}>
              {categoryName}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Categories;
