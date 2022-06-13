const axios = require("axios").default;
class FetchApi {
  constructor() {
    this.BASE_URL = "https://api.themoviedb.org/3/movie/now_playing";
    this.KEY = "?api_key=704271a1143bfd554df4b5f395de669f";
    this.searchQuery = "";
  }

  async fetchFilms() {
    const fetchResponse = await axios.get(
      `${this.BASE_URL}${this.KEY}&q=${this.searchQuery}`
    );
    console.log(fetchResponse);
    return fetchResponse;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}

export { FetchApi };
