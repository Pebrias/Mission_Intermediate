import { create } from 'zustand'
import { myListMovies } from '../data/movies'

/** State management Daftar Saya (Zustand). */
const useMyListStore = create((set) => ({
  movies: myListMovies,
  addMovie: (movie) =>
    set((state) =>
      state.movies.some((m) => m.id === movie.id) ? state : { movies: [...state.movies, movie] },
    ),
  removeMovie: (id) => set((state) => ({ movies: state.movies.filter((m) => m.id !== id) })),
}))

export default useMyListStore
