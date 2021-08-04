

const url = (q: string,pageSize:string,page:string) => `https://newsapi.org/v2/everything?q=${q}&pageSize=${pageSize}&page=${page}&apiKey=f706ea795fd746e0a5854ee006632c03`;

export const getArticles  = async (q:string,pageSize:string,page:string) => {
  const response = await fetch(url(q,pageSize,page));

  return response.json();
};