'use client'
import Link from 'next/link'
import {useState} from 'react'
import s from './styles.module.scss'
import {SettingsToggle} from '../SettingsToggle/SettingsToggle'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)

  return (
    <header className={s.header}>
      <h1 className={s.title}>Currency Converter</h1>

      <button
        type="button"
        className={`${s.burger} ${isOpen ? s.burgerActive : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}>
        <span className={s.burgerLine} />
        <span className={s.burgerLine} />
        <span className={s.burgerLine} />
      </button>

      <nav className={`${s.nav} ${isOpen ? s.navOpen : ''}`}>
        <ul className={s.navList}>
          <li className={s.navItem}>
            <Link href="/" className={s.navLink} onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className={s.navItem}>
            <Link href="/about" className={s.navLink} onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li className={s.navItem}>
            <SettingsToggle />
          </li>
        </ul>
      </nav>
    </header>
  )
}
