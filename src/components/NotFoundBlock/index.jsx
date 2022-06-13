import React from 'react';

import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>Страница не найдена</h1>
      <p className={styles.desc}>
        К большому сожалению данная страница отсутствует в нашем
        интернет-магазине
      </p>
    </div>
  );
};

export default NotFoundBlock;
