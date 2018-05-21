export const getArticleDataApi = (query, sort) => {
  if (query !== '') {
    return `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&sort=${sort}`
  }
  return `https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=${sort}`;
}

export const getBookDataApi = (query, sort) => {
  return `https://api.nytimes.com/svc/books/v3/lists.json?list=${query}&sort-order=${sort}`;
}
