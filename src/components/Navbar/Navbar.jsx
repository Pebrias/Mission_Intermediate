import { useState } from 'react'
import { Link } from 'react-router-dom'
import { logo, logoIcon, akunIcon, dropdownIcon, profileIcon, subscirptionIcon, exitIcon } from '../../assets/images'
import './Navbar.css'

const defaultLinks = [
  { label: 'Series', to: '#' },
  { label: 'Film', to: '#' },
  { label: 'Daftar Saya', to: '#' },
]

const defaultMenu = [
  { label: 'Profil Saya', icon: profileIcon, to: '#' },
  { label: 'Ubah Premium', icon: subscirptionIcon, to: '#' },
  { label: 'Keluar', icon: exitIcon, to: '/login' },
]

function Navbar({ links = defaultLinks, menuItems = defaultMenu }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <nav className="navbar__nav">
        <Link to="/home" className="navbar__brand">
          <img className="navbar__logo-full" src={logo} alt="Chill" />
          <img className="navbar__logo-icon" src={logoIcon} alt="Chill" />
        </Link>
        {links.map((link) => (
          <Link key={link.label} to={link.to} className="navbar__link">
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="navbar__profile">
        <img className="navbar__avatar" src={akunIcon} alt="Akun Saya" />
        <button
          type="button"
          className="navbar__toggle"
          aria-label="Buka menu akun"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <img src={dropdownIcon} alt="" />
        </button>

        {open && (
          <div className="navbar__menu">
            {menuItems.map((item) => (
              <Link key={item.label} to={item.to} className="navbar__menu-item" onClick={() => setOpen(false)}>
                <img src={item.icon} alt="" />
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
