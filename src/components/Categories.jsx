import React from 'react';

function Categories() {
  const [activeId, setActiveId] = React.useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const onClickCategory = (index) => {
    setActiveId(index);
  };

  return (
    <>
      <div className='categories'>
        <ul>
          {categories.map((title, index) => (
            <li
              key={index}
              onClick={() => onClickCategory(index)}
              className={activeId === index ? 'active' : ''}>
              {title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Categories;
