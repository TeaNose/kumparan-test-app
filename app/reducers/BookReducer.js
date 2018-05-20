import {
  REQUESTING_BOOK_DATAS,
  REQUEST_BOOK_DATA_FAILED,
  REQUEST_BOOK_DATA_SUCCESS,
} from '../actions/ActionType';

const initialState = {
  isRequestBookData: false,
  bookData: [],
  errorMessageBook: '',
};

export const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTING_BOOK_DATAS:
      return {
        ...state,
        isRequestBookData: true,
      }
    case REQUEST_BOOK_DATA_FAILED:
      return {
        ...state,
        isRequestBookData: false,
        errorMessageBook: action.error,
      }
    case REQUEST_BOOK_DATA_SUCCESS:
      return {
        ...state,
        isRequestBookData: false,
        bookData: action.data,
      }
    default:
      return state;
  }
}
