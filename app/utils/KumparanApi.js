export const getArticleDataApi = (query, sort) => {
  if (query !== '') {
    return `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}`
  }
  return `https://api.nytimes.com/svc/search/v2/articlesearch.json`;
}
