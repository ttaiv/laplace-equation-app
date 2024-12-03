import Link from 'next/link'
import styles from './navbar.module.css'

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navbarItem}>
          <Link href="/laplace">Laplace Equation</Link>
        </li>
      </ul>
    </nav>
  )
}