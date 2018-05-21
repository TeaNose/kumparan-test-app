import axios from 'axios';

import { getArticleDataApi } from '../utils/KumparanApi';
import {
  REQUESTING_ARTICLE_DATAS,
  REQUEST_ARTICLE_DATA_FAILED,
  REQUEST_ARTICLE_DATA_SUCCESS,
} from './ActionType';

export const requestingArticleDatas = () => ({
  type: REQUESTING_ARTICLE_DATAS
})

export const requestArticleDataFailed = (error) => ({
  type: REQUEST_ARTICLE_DATA_FAILED,
  error
})

export const requestArticleDataSuccess = (data) => ({
  type: REQUEST_ARTICLE_DATA_SUCCESS,
  data
})

export const getArticleData = (query, sort) => (dispatch) => {
  dispatch(requestingArticleDatas())
  return axios({
    method: 'GET',
    url: getArticleDataApi(query, sort),
    headers: {
      'api-key': '20460f0bde924f0698d253f346b7dfe9',
    },
    responseType: 'json',
    timeout: 10000,
  })
  .then(response => {
    const result = response.data;
    if (result.status === 'OK') {
      dispatch(requestArticleDataSuccess(result.response.docs));
    } else {
      console.log('Get article datas fail')
    }
  })
  .catch(error => {
    console.log(`Error at getArticleData: ${error}`)
    dispatch(requestArticleDataFailed(error));
  });
}
