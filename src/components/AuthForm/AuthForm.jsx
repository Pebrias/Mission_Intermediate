import { useState } from 'react'
import { Link } from 'react-router-dom'
import { logo, eyeOffIcon, googleIcon } from '../../assets/images'
import './AuthForm.css'

/**
 * Form autentikasi reusable (Login / Register).
 * fields: [{ name, label, type, placeholder }]
 * Field bertipe "password" otomatis mendapat tombol show/hide.
 */
function AuthForm({
  title,
  subtitle,
  fields,
  submitLabel,
  googleLabel,
  footerLinks = [],
  onSubmit,
}) {
  const [visible, setVisible] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()
    if (onSubmit) onSubmit(Object.fromEntries(new FormData(event.target)))
  }

  return (
    <div className="auth">
      <main className="auth__card">
        <img className="auth__logo" src={logo} alt="Chill App Logo" />

        <div className="auth__header">
          <h1>{title}</h1>
          <p>{subtitle}</p>
        </div>

        <form className="auth__form" onSubmit={handleSubmit}>
          {fields.map((field) => {
            const isPassword = field.type === 'password'
            const type = isPassword && visible[field.name] ? 'text' : field.type
            return (
              <div key={field.name} className="auth__group">
                <label htmlFor={field.name}>{field.label}</label>
                <input
                  className="auth__input"
                  type={type}
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  required
                />
                {isPassword && (
                  <button
                    type="button"
                    className="auth__eye"
                    aria-label="Tampilkan atau sembunyikan kata sandi"
                    onClick={() => setVisible((prev) => ({ ...prev, [field.name]: !prev[field.name] }))}
                  >
                    <img src={eyeOffIcon} alt="" />
                  </button>
                )}
              </div>
            )
          })}

          <div className="auth__links">
            {footerLinks.map((link) => (
              <p key={link.text}>
                {link.prefix} <Link to={link.to}>{link.text}</Link>
              </p>
            ))}
          </div>

          <div className="auth__actions">
            <button type="submit" className="auth__btn">{submitLabel}</button>
            <p>Atau</p>
            <button type="button" className="auth__btn auth__btn--google">
              <img src={googleIcon} alt="" />
              {googleLabel}
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default AuthForm
