import {
  ActionTypes, ArticleAction, ArticlesAction, PageAction, PageCountAction, PageSizeAction, PendingAction, QAction, SortByAction,
} from './ActionsInterfaces';

export function setQ(q: string): QAction {
  return { type: ActionTypes.SET_Q, payload: q };
}
export function setPage(page: number): PageAction {
  return { type: ActionTypes.SET_PAGE, payload: page };
}
export function setPageSize(pageSize: number): PageSizeAction {
  return { type: ActionTypes.SET_PAGE_SIZE, payload: pageSize };
}

export function setSortBy(sortBy: string): SortByAction {
  return { type: ActionTypes.SET_SORT_BY, payload: sortBy };
}
export function setPending(pending: boolean): PendingAction {
  return { type: ActionTypes.SET_PENDING, payload: pending };
}

export function setPageCount(pageCount: number): PageCountAction {
  return { type: ActionTypes.SET_PAGE_COUNT, payload: pageCount };
}

const url = (q: string, page = 1, pageSize = 100, sortBy = ''): string => `https://newsapi.org/v2/everything?q="${q}"&pageSize=${pageSize}&page=${page}&sortBy=${sortBy}&apiKey=f706ea795fd746e0a5854ee006632c03`;

export function setArticles(q: string, page: number, pageSize: number, sortBy: string) {
  return async (dispatch: (arg0: ArticlesAction | PageCountAction | PendingAction) => void): Promise<void> => {
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
      dispatch({ type: ActionTypes.SET_ARTICLES, payload: articles });
      dispatch(setPageCount(data.totalResults));
    } else dispatch({ type: ActionTypes.SET_ARTICLES, payload: [] });

    dispatch(setPending(false));
  };
}

export const setArticle = (q: string) => async (dispatch: (arg0: ArticleAction) => void): Promise<void> => {
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
  dispatch({ type: ActionTypes.SET_ARTICLE, payload: article });
};
