import * as img from '../assets/images'

export const recentMovies = [
  { id: 1, title: "Don't Look Up", image: img.dontlookup, newEpisode: true },
  { id: 2, title: 'All of Us Are Dead', image: img.allofusaredeath },
  { id: 3, title: 'Blue Lock', image: img.bluelock },
  { id: 4, title: 'A Man Called Otto', image: img.otto },
]

export const topRatedMovies = [
  { id: 1, title: 'Suzume', image: img.suzumeCard, newEpisode: true, top10: true },
  { id: 2, title: 'Jurrasic World', image: img.mehCard },
  { id: 3, title: 'All of Us Are Dead', image: img.allofusaredeadCard },
  { id: 4, title: 'Sonic 2', image: img.ilikethewayyoumakeitCard },
  { id: 5, title: 'Big Hero 6', image: img.bighero6Card },
]

export const trendingMovies = [
  { id: 1, title: 'The Tomorrow War', image: img.smartassdudeCard },
  { id: 2, title: 'Ant-Man Quantumania', image: img.antmanCard },
  { id: 3, title: 'Guardians of the Galaxy', image: img.noobleaderCard },
  { id: 4, title: 'A Man Called Otto', image: img.ottoCard },
  { id: 5, title: 'Little Mermaid', image: img.idontwannaseeitCard },
]

export const newReleaseMovies = [
  { id: 1, title: 'Little Mermaid', image: img.idontwannaseeitCard },
  { id: 2, title: 'Duty After School', image: img.dutyafterschoolCard },
  { id: 3, title: 'Big Hero 6', image: img.bighero6Card },
  { id: 4, title: 'All of Us Are Dead', image: img.allofusaredeadCard },
  { id: 5, title: 'Missing Person', image: img.missingpersonCard },
]

export const featuredMovie = {
  title: 'Duty After School',
  description:
    'Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.',
  ageRating: '18+',
  backdrop: img.dutyafterschoolImg,
}

export const genres = [
  'Aksi', 'Drama', 'Komedi', 'Sains & Alam',
  'Anak-anak', 'Fantasi Ilmiah & Fantasi', 'Petualangan', 'Thriller',
  'Anime', 'Kejahatan', 'Perang',
  'Britania', 'KDrama', 'Romantis',
]

export const helpLinks = ['FAQ', 'Kontak Kami', 'Privasi', 'Syarat & Ketentuan']
