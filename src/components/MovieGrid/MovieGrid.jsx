import { newepsBadge, top10Badge } from '../../assets/images'
import './MovieGrid.css'

/**
 * Grid poster reusable (dipakai di halaman Daftar Saya).
 * onRemove opsional: jika diberikan, tombol hapus muncul saat poster di-hover.
 */
function MovieGrid({ title, movies, onRemove, emptyMessage = 'Belum ada film.' }) {
  return (
    <section className="movie-grid">
      <h1 className="movie-grid__title">{title}</h1>
      {movies.length === 0 ? (
        <p className="movie-grid__empty">{emptyMessage}</p>
      ) : (
        <div className="movie-grid__list">
          {movies.map((movie) => (
            <div key={movie.id} className="movie-grid__card">
              <img className="movie-grid__poster" src={movie.image} alt={movie.title} />
              {movie.newEpisode && <img className="movie-grid__badge movie-grid__badge--new" src={newepsBadge} alt="Episode baru" />}
              {movie.top10 && <img className="movie-grid__badge movie-grid__badge--top" src={top10Badge} alt="Top 10" />}
              {onRemove && (
                <button
                  type="button"
                  className="movie-grid__remove"
                  aria-label={`Hapus ${movie.title} dari daftar`}
                  onClick={() => onRemove(movie.id)}
                >
                  ×
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default MovieGrid
