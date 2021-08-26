import { ICard } from '../shared/interfaces/ICard';

import { Action, ActionTypes } from './ActionsInterfaces';

const defaultState: IStore = {
  q: 'Sabaton',
  page: 1,
  pageSize: 12,
  sortBy: 'publishedAt',
  articles: [] as ICard[],
  pending: false,
  pageCount: 0,
  article: null as unknown as ICard,
};

function Reducer(state = defaultState, action: Action): IStore {
  switch (action.type) {
    case ActionTypes.SET_Q:
      return { ...state, q: action.payload };
    case ActionTypes.SET_PAGE:
      return { ...state, page: action.payload };
    case ActionTypes.SET_PAGE_SIZE:
      return { ...state, pageSize: action.payload };
    case ActionTypes.SET_SORT_BY:
      return { ...state, sortBy: action.payload };
    case ActionTypes.SET_ARTICLES:
      return { ...state, articles: action.payload };
    case ActionTypes.SET_ARTICLE:
      return { ...state, article: action.payload };
    case ActionTypes.SET_PENDING:
      return { ...state, pending: action.payload };
    case ActionTypes.SET_PAGE_COUNT:
      return { ...state, pageCount: Math.ceil(action.payload / state.pageSize) };
    default:
      return state;
  }
}

export interface IStore {
  q: string;
  page: number;
  pageSize: number;
  sortBy: string;
  articles: ICard[];
  pending: boolean;
  pageCount: number;
  article: ICard;
}
export default Reducer;
