const axios = require("axios").default;
class FetchApi {
  constructor() {
    this.BASE_URL = "https://api.themoviedb.org";
    this.KEY = "?api_key=704271a1143bfd554df4b5f395de669f";
    this.searchQuery = "";
    this.URL_BY_ID = "https://api.themoviedb.org";
  }

  async fetchFilms() {
    const fetchResponse = await axios.get(
      `${this.BASE_URL}/3/movie/popular${this.KEY}`
    );

    return fetchResponse;
  }

  async fetchMoviesById(id) {
    const fetchResponseById = await axios.get(
      `${this.URL_BY_ID}/3/movie/${id}${this.KEY}`
    );
    return fetchResponseById;
  }

  async fetchMoviesByName() {
    const fetchResponseByName = await axios.get(
      `${this.BASE_URL}/3/search/movie${this.KEY}&query=${this.searchQuery}`
    );
    return fetchResponseByName;
  }

  async fetchCastById(id) {
    const fetchCastById = await axios.get(
      `${this.BASE_URL}/3/movie/${id}/credits${this.KEY}`
    );
    return fetchCastById;
  }

  async fetchReviewById(id) {
    const fetchReviewById = await axios.get(
      `${this.BASE_URL}/3/movie/${id}/reviews${this.KEY}`
    );
    return fetchReviewById;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

export { FetchApi };
