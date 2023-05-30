
// API key:
const API = "0c60e8265ebbf36ea9770bab25faa7b5";

// create an object to store the requests:
const requests = {
    fetchGenres: `/genre/movie/list?api_key=${API}&language=en-US`,
    fetchTrending: `/trending/all/week?api_key=${API}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API}&with_genres=99`,
};

export default requests;