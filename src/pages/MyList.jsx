import Navbar from '../components/Navbar/Navbar'
import MovieGrid from '../components/MovieGrid/MovieGrid'
import Footer from '../components/Footer/Footer'
import useMyListStore from '../store/useMyListStore'

function MyList() {
  const movies = useMyListStore((state) => state.movies)
  const removeMovie = useMyListStore((state) => state.removeMovie)

  return (
    <>
      <Navbar />
      <main>
        <MovieGrid
          title="Daftar Saya"
          movies={movies}
          onRemove={removeMovie}
          emptyMessage="Daftar kamu masih kosong."
        />
      </main>
      <Footer />
    </>
  )
}

export default MyList
