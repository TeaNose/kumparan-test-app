import axios from 'axios';

import { getArticleDataApi } from '../utils/KumparanApi';
import {
  REQUESTING_ARTICLE_DATAS,
  REQUEST_ARTICLE_DATA_FAILED,
  REQUEST_ARTICLE_DATA_SUCCESS,
} from './ActionType';

const requestingArticleDatas = () => {
  type: REQUESTING_ARTICLE_DATAS
}

const requestArticleDataFailed = (error) => {
  type: REQUEST_ARTICLE_DATA_FAILED,
  error
}

const requestArticleDataSuccess = (data) => {
  type: REQUEST_ARTICLE_DATA_SUCCESS,
  data
}

export const getArticleData = () => {
  return dispatch => {
    // dispatch(requestingArticleDatas());
    return axios({
      method: 'GET',
      url: getArticleDataApi(),
      headers: {
        'api-key': '20460f0bde924f0698d253f346b7dfe9',
      },
      responseType: 'json',
      timeout: 10000,
    })
    .then(response => {
      console.log('Response: '+JSON.stringify(response.data.response.docs));
      const result = response.data;
      if (result.status === 'OK') {
        // dispatch(requestArticleDataSuccess(result.response.docs));
      } else {
        console.log('Get article datas fail')
      }
    })
    .catch(error => {
      console.log(`Error di getArticleData: ${error}`)
      // dispatch(requestArticleDataFailed(error));
    });
  }
}
