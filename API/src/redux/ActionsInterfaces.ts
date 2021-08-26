import { ICard } from '../shared/interfaces/ICard';

export enum ActionTypes {
  SET_Q = 'SET_Q',
  SET_PAGE = 'SET_PAGE',
  SET_PAGE_SIZE = 'SET_PAGE_SIZE',
  SET_SORT_BY = 'SET_SORT_BY',
  SET_ARTICLES = 'SET_ARTICLES',
  SET_ARTICLE = 'SET_ARTICLE',
  SET_PENDING = 'SET_PENDING',
  SET_PAGE_COUNT = 'SET_PAGE_COUNT',
}

export interface QAction {
  type: ActionTypes.SET_Q;
  payload: string;
}

export interface PageAction {
  type: ActionTypes.SET_PAGE;
  payload: number;
}
export interface PageCountAction {
  type: ActionTypes.SET_PAGE_COUNT;
  payload: number;
}
export interface PageSizeAction {
  type: ActionTypes.SET_PAGE_SIZE;
  payload: number;
}
export interface SortByAction {
  type: ActionTypes.SET_SORT_BY;
  payload: string;
}

export interface PendingAction {
  type: ActionTypes.SET_PENDING;
  payload: boolean;
}
export interface ArticlesAction {
  type: ActionTypes.SET_ARTICLES;
  payload: ICard[];
}
export interface ArticleAction {
  type: ActionTypes.SET_ARTICLE;
  payload: ICard;
}

export type Action = QAction | PageAction | PageCountAction | PageSizeAction | SortByAction | PendingAction | ArticlesAction | ArticleAction;
