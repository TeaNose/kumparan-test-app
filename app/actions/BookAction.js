import axios from 'axios';

import { getBookDataApi } from '../utils/KumparanApi';
import {
  REQUESTING_BOOK_DATAS,
  REQUEST_BOOK_DATA_FAILED,
  REQUEST_BOOK_DATA_SUCCESS,
} from './ActionType';

export const requestingBookDatas = () => ({
  type: REQUESTING_BOOK_DATAS
})

export const requestBookDataFailed = (error) => ({
  type: REQUEST_BOOK_DATA_FAILED,
  error
})

export const requestBookDataSuccess = (data) => ({
  type: REQUEST_BOOK_DATA_SUCCESS,
  data
})

export const getBookData = (query, sort) => (dispatch) => {
  dispatch(requestingBookDatas())
  return axios({
    method: 'GET',
    url: getBookDataApi(query, sort),
    headers: {
      'api-key': '20460f0bde924f0698d253f346b7dfe9',
    },
    responseType: 'json',
    timeout: 10000,
  })
  .then(response => {
    if (response.data.status === 'OK') {
      dispatch(requestBookDataSuccess(response.data.results));
    } else {
      console.log('Get book datas fail')
    }
  })
  .catch(error => {
    console.log(`Error at getBookData: ${error}`)
    dispatch(requestBookDataFailed(error));
  });
}
