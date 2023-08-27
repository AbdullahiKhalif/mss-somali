import React from 'react'
import styles from './header.module.scss';
const Header = () => {
  return (
    <div className={styles.header}>
        <ul>
            <li><a href="#">Mss Somali</a></li>
            <li><a href="#">All Competitors</a></li>
        </ul>
    </div>
  )
}

export default Header