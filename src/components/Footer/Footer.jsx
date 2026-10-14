import { useState } from 'react'
import { logo, droprightIcon } from '../../assets/images'
import { genres as defaultGenres, helpLinks as defaultHelp } from '../../data/movies'
import './Footer.css'

function FooterColumn({ title, items, gridClass }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="footer__column">
      <button type="button" className="footer__heading" aria-expanded={open} onClick={() => setOpen((prev) => !prev)}>
        {title}
        <img className={`footer__arrow ${open ? 'footer__arrow--open' : ''}`} src={droprightIcon} alt="" />
      </button>
      <div className={`${gridClass} ${open ? 'footer__list--open' : ''}`}>
        {items.map((item) => (
          <a key={item} href="#" className="footer__link">{item}</a>
        ))}
      </div>
    </div>
  )
}

function Footer({ genres = defaultGenres, helpLinks = defaultHelp }) {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <img src={logo} alt="Chill" />
        <p>&copy;2023 Chill All Rights Reserved.</p>
      </div>

      <div className="footer__columns">
        <FooterColumn title="Genre" items={genres} gridClass="footer__list footer__list--genre" />
        <FooterColumn title="Bantuan" items={helpLinks} gridClass="footer__list footer__list--help" />
      </div>
    </footer>
  )
}

export default Footer
