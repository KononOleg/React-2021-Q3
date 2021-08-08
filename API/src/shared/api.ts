import { ICard } from './interfaces/ICard';

const url = (q: string, page: number, pageSize: number, sortBy: string): string => `https://newsapi.org/v2/everything?q=${q}&pageSize=${pageSize}&page=${page}&sortBy=${sortBy}&apiKey=f706ea795fd746e0a5854ee006632c03`;

export const getArticles = async (q: string, page: number, pageSize: number, sortBy: string): Promise<{ articles: ICard[]; count: number }> => {
  const response = await fetch(url(q, page, pageSize, sortBy));

  if (response.status === 200) {
    const data = await response.json();
    const articles = data.articles.map((article: { author: string; urlToImage: string; publishedAt: string; source: { name: string } }) => ({
      author: article.author,
      image: article.urlToImage,
      date: article.publishedAt,
      name: article.source.name,
    }));
    return { articles, count: data.totalResults };
  }
  return { articles: [], count: 0 };
};
