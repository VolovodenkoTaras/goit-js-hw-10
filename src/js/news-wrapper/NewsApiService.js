const ENDPOINT = `https://newsapi.org/v2/everything`;
const options = {
  headers: {
    "X-Api-Key": "9699272ded324d29952ed472c40bb7e9",
  },
};

export default class NewsApiService {
  constructor() {
    this.page = 1;
    this.searchQuery = "";
  }

  getNews() {
    const URL = `${ENDPOINT}?q=${this.searchQuery}&pageSize=5&page=${this.page}`;

    return fetch(URL, options)
      .then((response) => response.json())
      .then(({ articles }) => {
        this.nextPage();
        return articles;
      });
  }

  nextPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
}
