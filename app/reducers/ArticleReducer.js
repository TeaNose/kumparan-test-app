import {
  REQUESTING_ARTICLE_DATAS,
  REQUEST_ARTICLE_DATA_FAILED,
  REQUEST_ARTICLE_DATA_SUCCESS,
} from '../actions/ActionType';

const initialState = {
  isRequestArticleData: false,
  articleData: [],
  errorMessageArticle: '',
};

export const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTING_ARTICLE_DATAS:
      return {
        ...state,
        isRequestArticleData: true,
      }
    case REQUEST_ARTICLE_DATA_FAILED:
      return {
        ...state,
        isRequestArticleData: false,
        errorMessageArticle: action.error,
      }
    case REQUEST_ARTICLE_DATA_SUCCESS:
      return {
        ...state,
        isRequestArticleData: false,
        articleData: action.data,
      }
    default:
      return state;
  }
}
