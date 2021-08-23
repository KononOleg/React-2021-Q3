export const SET_Q = 'SET_Q';
export const SET_PAGE = 'SET_PAGE';
export const SET_PAGE_SIZE = 'SET_PAGE_SIZE';
export const SET_SORT_BY = 'SET_SORT_BY';
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
