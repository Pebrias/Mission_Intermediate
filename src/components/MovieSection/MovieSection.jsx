import { useRef, useState } from 'react'
import { flushSync } from 'react-dom'
import { newepsBadge, top10Badge, arrowLeft, arrowRight } from '../../assets/images'
import './MovieSection.css'

const SLIDE_MS = 400

/**
 * Baris film reusable.
 * variant: "landscape" (kartu lebar) atau "portrait" (poster).
 * Desktop: carousel melingkar lewat tombol panah (poster pertama pindah ke akhir, dst).
 * Mobile: geser (swipe) native.
 */
function MovieSection({ title, movies, variant = 'portrait' }) {
  const trackRef = useRef(null)
  const busyRef = useRef(false)
  const [items, setItems] = useState(movies)

  const getStep = () => {
    const track = trackRef.current
    const card = track.firstElementChild
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0
    return card.offsetWidth + gap
  }

  const next = () => {
    if (busyRef.current || items.length < 2) return
    busyRef.current = true
    const track = trackRef.current
    track.style.transition = `transform ${SLIDE_MS}ms ease`
    track.style.transform = `translateX(-${getStep()}px)`
    setTimeout(() => {
      flushSync(() => setItems((prev) => [...prev.slice(1), prev[0]]))
      track.style.transition = 'none'
      track.style.transform = ''
      busyRef.current = false
    }, SLIDE_MS)
  }

  const prev = () => {
    if (busyRef.current || items.length < 2) return
    busyRef.current = true
    const track = trackRef.current
    const step = getStep()
    flushSync(() => setItems((list) => [list[list.length - 1], ...list.slice(0, -1)]))
    track.style.transition = 'none'
    track.style.transform = `translateX(-${step}px)`
    void track.offsetWidth // reflow agar transisi berikutnya terbaca
    track.style.transition = `transform ${SLIDE_MS}ms ease`
    track.style.transform = 'translateX(0)'
    setTimeout(() => {
      track.style.transition = 'none'
      track.style.transform = ''
      busyRef.current = false
    }, SLIDE_MS)
  }

  return (
    <section className="movie-section">
      <h2 className="movie-section__title">{title}</h2>
      <div className="movie-section__wrapper">
        <button
          type="button"
          className="movie-section__arrow movie-section__arrow--left"
          aria-label="Geser ke kiri"
          onClick={prev}
        >
          <img src={arrowLeft} alt="" />
        </button>
        <div className={`movie-section__row movie-section__row--${variant}`}>
          <div ref={trackRef} className="movie-section__track">
            {items.map((movie) => (
              <div key={movie.id} className="movie-section__card">
                <img className="movie-section__poster" src={movie.image} alt={movie.title} />
                {movie.newEpisode && <img className="movie-section__badge movie-section__badge--new" src={newepsBadge} alt="Episode baru" />}
                {movie.top10 && <img className="movie-section__badge movie-section__badge--top" src={top10Badge} alt="Top 10" />}
              </div>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="movie-section__arrow movie-section__arrow--right"
          aria-label="Geser ke kanan"
          onClick={next}
        >
          <img src={arrowRight} alt="" />
        </button>
      </div>
    </section>
  )
}

export default MovieSection
