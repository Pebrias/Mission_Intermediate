import { moreIcon, muteIcon } from '../../assets/images'
import './Hero.css'

function Hero({ title, description, ageRating, backdrop }) {
  return (
    <section className="hero">
      <img className="hero__bg" src={backdrop} alt="" />
      <div className="hero__content">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__desc">{description}</p>

        <div className="hero__actions">
          <button type="button" className="hero__btn hero__btn--primary">Mulai</button>
          <button type="button" className="hero__btn hero__btn--secondary">
            <img src={moreIcon} alt="" />
            Selengkapnya
          </button>
          <span className="hero__age">{ageRating}</span>
          <button type="button" className="hero__mute" aria-label="Matikan suara">
            <img src={muteIcon} alt="" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
