import styles from './page.module.css';
import Image from 'next/image';

export default async function Page({ params }) {
  const { id } = params;

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();


  return (
    <div className={`${styles['product-page']} container`}>
      <section className={styles.photo}>
          <Image
            src={product.images[0]}
            alt={`Image for ${product.title}`}
            width={344}
            height={344}
            unoptimized // Remove this if domain is whitelisted in next.config.js
          />
      </section>
      <section className={styles.info}>
        <h1>{product.title}</h1>
        <p className={styles.price}>{product.price}</p>
        <p>{product.description}</p>

        <div className={styles['add-to-bag']}>
            <button> Add to the basket </button>
        </div>

      </section>
    </div>
  );
}
