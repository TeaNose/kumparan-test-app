import * as Actions from '../../../app/actions/ArticleAction';
import * as ActionTypes from '../../../app/actions/ActionType';

describe('Article Action', function() {
  describe('requestArticleDataFailed', function() {
    it('should have a type of REQUEST_ARTICLE_DATA_FAILED', function() {
      const errorMessage = 'Error';
      expect(Actions.requestArticleDataFailed(errorMessage).type).toEqual(ActionTypes.REQUEST_ARTICLE_DATA_FAILED);
      expect(Actions.requestArticleDataFailed(errorMessage).error).toEqual(errorMessage);
    });
  });

  describe('requestingArticleDatas', function() {
    it('should have a type of REQUESTING_ARTICLE_DATAS', function() {
      expect(Actions.requestingArticleDatas().type).toEqual(ActionTypes.REQUESTING_ARTICLE_DATAS);
    });
  });

  describe('requestArticleDataSuccess', function() {
    it('should have a type of REQUEST_ARTICLE_DATA_SUCCESS', function() {
      const data = {
        status: 'OK'
      }
      expect(Actions.requestArticleDataSuccess(data).type).toEqual(ActionTypes.REQUEST_ARTICLE_DATA_SUCCESS);
      expect(Actions.requestArticleDataSuccess(data).data).toEqual(data);
    });
  });
});
