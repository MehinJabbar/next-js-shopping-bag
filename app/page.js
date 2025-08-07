import styles from './page.module.css'
import Hero from './homepage/Hero';

export default function Home() {
  return (
    <div className={styles.homepage}>
      <Hero/>
      <h2>Our Categories</h2>
    </div>
    
  );
}
