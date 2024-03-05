import React from 'react';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <header className={styles.banner}>
        <p>TasteBud</p>
      <p>Discover and create recipes based on your preferences</p>
      <input type="text" placeholder="search" className={styles.searchBar} />
    </header>
  );
};

export default Banner;
