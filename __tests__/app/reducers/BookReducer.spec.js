import * as ActionTypes from '../../../app/actions/ActionType';
import { bookReducer } from '../../../app/reducers/BookReducer';

const initialState = {
  isRequestBookData: false,
  bookData: [],
  errorMessageBook: '',
};

describe ('Book Reducer', function(){
  it('should return the initial state', function() {
      expect(bookReducer(initialState, {})).toEqual(initialState);
  });

  it("should react to an action with the type 'REQUEST_BOOK_DATA_FAILED'", function() {
    const isRequestBookData = false;
    const errorMessageBook = 'Error'
    expect(bookReducer(initialState, {
        type: ActionTypes.REQUEST_BOOK_DATA_FAILED,
        error: errorMessageBook,
    })).toEqual({...initialState, isRequestBookData, errorMessageBook});
  });

  it("should react to an action with the type 'REQUESTING_BOOK_DATAS'", function() {
    const isRequestBookData = true;
    expect(bookReducer(initialState, {
        type: ActionTypes.REQUESTING_BOOK_DATAS
    })).toEqual({...initialState, isRequestBookData});
  });

  it("should react to an action with the type 'REQUEST_BOOK_DATA_SUCCESS'", function() {
    const isRequestBookData = false;
    const bookData = {
      status: 'OK'
    };
    expect(bookReducer(initialState, {
        type: ActionTypes.REQUEST_BOOK_DATA_SUCCESS,
        data: bookData
    })).toEqual({...initialState, isRequestBookData, bookData});
  });
})
