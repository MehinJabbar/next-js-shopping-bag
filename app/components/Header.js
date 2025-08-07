import styles from './header.module.css'
import Image from 'next/image'
export default function Header() {
  return (
    <header className={styles['app-header']}>
        <div className={`${styles.wrapper} container`}>
        <aside>
            <Image 
            src='/logo3x.png' 
            alt="Web Page"
            height= {22}
            width={108}/>
        </aside>
        <aside>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>Shopping Bag</li>
                </ul>
            </nav>
        </aside>
        </div>
              
    </header>
  )
}
