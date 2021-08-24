export const SET_Q = 'SET_Q';
export const SET_PAGE = 'SET_PAGE';
export const SET_PAGE_SIZE = 'SET_PAGE_SIZE';
export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_ARTICLES = 'SET_ARTICLES';
export const SET_ARTICLE = 'SET_ARTICLE';
export const SET_PENDING = 'SET_PENDING';
export const SET_PAGE_COUNT = 'SET_PAGE_COUNT';

export function setQ(q: string): { type: string; payload: string } {
  return { type: SET_Q, payload: q };
}
export function setPage(page: number): { type: string; payload: number } {
  return { type: SET_PAGE, payload: page };
}
export function setPageSize(pageSize: number): { type: string; payload: number } {
  return { type: SET_PAGE_SIZE, payload: pageSize };
}

export function setSortBy(sortBy: string): { type: string; payload: string } {
  return { type: SET_SORT_BY, payload: sortBy };
}
export function setPending(pending: boolean): { type: string; payload: boolean } {
  return { type: SET_PENDING, payload: pending };
}

export function setPageCount(pageCount: number): { type: string; payload: number } {
  return { type: SET_PAGE_COUNT, payload: pageCount };
}

const url = (q: string, page = 1, pageSize = 100, sortBy = ''): string => `https://newsapi.org/v2/everything?q="${q}"&pageSize=${pageSize}&page=${page}&sortBy=${sortBy}&apiKey=f706ea795fd746e0a5854ee006632c03`;

export function setArticles(q: string, page: number, pageSize: number, sortBy: string) {
  return async (dispatch: (arg0: { type: string; payload: any }) => void): Promise<void> => {
    dispatch(setPending(true));
    const response = await fetch(url(q, page, pageSize, sortBy));

    if (response.status === 200) {
      const data = await response.json();
      const articles = data.articles.map((article: { author: string; urlToImage: string; publishedAt: string; source: { name: string }; title: string }) => ({
        author: article.author,
        image: article.urlToImage,
        date: article.publishedAt,
        name: article.source.name,
        title: article.title,
      }));
      dispatch({ type: SET_ARTICLES, payload: articles });
      dispatch(setPageCount(data.totalResults));
    } else dispatch({ type: SET_ARTICLES, payload: 0 });

    dispatch(setPending(false));
  };
}

export const setArticle = (q: string) => async (dispatch: (arg0: { type: string; payload: any }) => void): Promise<void> => {
  const response = await fetch(url(q));
  const data = await response.json();
  const { articles } = data;
  const article = {
    author: articles[0].author,
    image: articles[0].urlToImage,
    date: articles[0].publishedAt,
    name: articles[0].source.name,
    title: articles[0].title,
    url: articles[0].url,
  };
  dispatch({ type: SET_ARTICLE, payload: article });
};
