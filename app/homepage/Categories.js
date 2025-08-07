import React from 'react'
import styles from './categories.module.css'

export default function Categories() {
  return (
    <div className={styles.categories}>
        <h2>Our Categories</h2>
        <ul className={`${styles.wrapper} container`}>
            <li className={styles.categories}>Beauty</li>
            <li className={styles.categories}>Fragrances</li>
            <li className={styles.categories}>Furniture</li>
        </ul>
      
    </div>
  )
}
