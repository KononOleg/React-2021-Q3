import {
  SET_Q, SET_PAGE, SET_PAGE_SIZE, SET_SORT_BY,
} from './actions';

const defaultState = {
  q: 'Sabaton',
  page: 1,
  pageSize: 12,
  sortBy: 'publishedAt',
};

function todos(state = defaultState, action: { type: string; payload: any }):IStore {
  switch (action.type) {
    case SET_Q:
      return { ...state, q: action.payload };
    case SET_PAGE:
      return { ...state, page: action.payload };
    case SET_PAGE_SIZE:
      return { ...state, pageSize: action.payload };
    case SET_SORT_BY:
      return { ...state, sortBy: action.payload };
    default:
      return state;
  }
}

export interface IStore {
  q: string;
  page: number;
  pageSize: number;
  sortBy: string;
}
export default todos;
