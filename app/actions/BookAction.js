import {
  REQUESTING_BOOK_DATAS,
  REQUEST_BOOK_DATA_FAILED,
  REQUEST_BOOK_DATA_SUCCESS,
} from './ActionType';

const requestingBookDatas = () => {
  type: REQUESTING_BOOK_DATAS
}

const requestBookDataFailed = (error) => {
  type: REQUEST_BOOK_DATA_FAILED,
  error
}

const requestBookDataSuccess = (data) => {
  type: REQUEST_BOOK_DATA_SUCCESS,
  data
}

export const getBookData = () => {
  console.log('Dispatching request book data');
  // return (dispatch) => {
  //   dispatch(requestingBookDatas());
  // }
}
