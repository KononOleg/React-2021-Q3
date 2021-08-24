import { ICard } from '../shared/interfaces/ICard';
import {
  SET_Q, SET_PAGE, SET_PAGE_SIZE, SET_SORT_BY, SET_ARTICLES, SET_PENDING, SET_PAGE_COUNT, SET_ARTICLE,
} from './actions';

const defaultState = {
  q: 'Sabaton',
  page: 1,
  pageSize: 12,
  sortBy: 'publishedAt',
  articles: [] as ICard[],
  pending: false,
  pageCount: 0,
  article: null as unknown as ICard,
};

function todos(state = defaultState, action: { type: string; payload: any }): IStore {
  switch (action.type) {
    case SET_Q:
      return { ...state, q: action.payload };
    case SET_PAGE:
      return { ...state, page: action.payload };
    case SET_PAGE_SIZE:
      return { ...state, pageSize: action.payload };
    case SET_SORT_BY:
      return { ...state, sortBy: action.payload };
    case SET_ARTICLES:
      return { ...state, articles: action.payload };
    case SET_ARTICLE:
      return { ...state, article: action.payload };
    case SET_PENDING:
      return { ...state, pending: action.payload };
    case SET_PAGE_COUNT:
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
export default todos;
