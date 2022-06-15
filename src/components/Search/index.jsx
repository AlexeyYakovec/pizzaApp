import React from 'react';

import styles from './Search.module.scss';
import { SearchContext } from '../../App';

import { FcSearch } from 'react-icons/fc';
import { IoMdClose } from 'react-icons/io';

function Search() {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  return (
    <div className={styles.searchWrapper}>
      <FcSearch className={styles.iconSearch} size={18} />
      <input
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        className={styles.input}
        type='text'
        placeholder='поиск пиццы...'
      />
      {searchValue && (
        <IoMdClose onClick={() => setSearchValue('')} className={styles.iconClose} size={22} />
      )}
    </div>
  );
}

export default Search;
