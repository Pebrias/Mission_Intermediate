import { newepsBadge, top10Badge } from '../../assets/images'
import './MovieSection.css'

/**
 * Baris film reusable.
 * variant: "landscape" (kartu lebar) atau "portrait" (poster).
 */
function MovieSection({ title, movies, variant = 'portrait' }) {
  return (
    <section className="movie-section">
      <h2 className="movie-section__title">{title}</h2>
      <div className={`movie-section__row movie-section__row--${variant}`}>
        {movies.map((movie) => (
          <div key={movie.id} className="movie-section__card">
            <img className="movie-section__poster" src={movie.image} alt={movie.title} />
            {movie.newEpisode && <img className="movie-section__badge movie-section__badge--new" src={newepsBadge} alt="Episode baru" />}
            {movie.top10 && <img className="movie-section__badge movie-section__badge--top" src={top10Badge} alt="Top 10" />}
          </div>
        ))}
      </div>
    </section>
  )
}

export default MovieSection
