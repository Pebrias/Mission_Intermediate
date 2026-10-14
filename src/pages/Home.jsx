import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import MovieSection from '../components/MovieSection/MovieSection'
import Footer from '../components/Footer/Footer'
import {
  featuredMovie,
  recentMovies,
  topRatedMovies,
  trendingMovies,
  newReleaseMovies,
} from '../data/movies'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero {...featuredMovie} />
        <MovieSection title="Melanjutkan Tonton Film" movies={recentMovies} variant="landscape" />
        <MovieSection title="Top Rating Film dan Series Hari Ini" movies={topRatedMovies} />
        <MovieSection title="Film Trending" movies={trendingMovies} />
        <MovieSection title="Rilis Baru" movies={newReleaseMovies} />
      </main>
      <Footer />
    </>
  )
}

export default Home
