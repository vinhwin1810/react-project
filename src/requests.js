const API_KEY = "9b4f46809602fb6ecf645af8df3d8bea";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genre=28`,
    fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genre=35`,
    fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genre=27`,
    fetchRomanMovies: `discover/movie?api_key=${API_KEY}&with_genre=10749`,
    fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genre=99`,
}

export default requests;