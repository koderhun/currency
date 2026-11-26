'use client'
import Link from 'next/link'
import {useState} from 'react'
import s from './styles.module.scss'
import {SettingsToggle} from '$/components/SettingsToggle/SettingsToggle'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

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
            <Link href="/" className={s.navLink} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className={s.navItem}>
            <Link href="/about" className={s.navLink} onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className={s.navItem}>
            <SettingsToggle onChange={closeMenu} />
          </li>
        </ul>
      </nav>
    </header>
  )
}
