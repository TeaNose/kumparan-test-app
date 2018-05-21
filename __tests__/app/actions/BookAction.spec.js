import * as Actions from '../../../app/actions/BookAction';
import * as ActionTypes from '../../../app/actions/ActionType';

describe('Book Action', function() {
  describe('requestBookDataFailed', function() {
    it('should have a type of REQUEST_BOOK_DATA_FAILED', function() {
      const errorMessage = 'Error';
      expect(Actions.requestBookDataFailed(errorMessage).type).toEqual(ActionTypes.REQUEST_BOOK_DATA_FAILED);
      expect(Actions.requestBookDataFailed(errorMessage).error).toEqual(errorMessage);
    });
  });

  describe('requestingBookDatas', function() {
    it('should have a type of REQUESTING_BOOK_DATAS', function() {
      expect(Actions.requestingBookDatas().type).toEqual(ActionTypes.REQUESTING_BOOK_DATAS);
    });
  });

  describe('requestBookDataSuccess', function() {
    it('should have a type of REQUEST_BOOK_DATA_SUCCESS', function() {
      const data = {
        status: 'OK'
      }
      expect(Actions.requestBookDataSuccess(data).type).toEqual(ActionTypes.REQUEST_BOOK_DATA_SUCCESS);
      expect(Actions.requestBookDataSuccess(data).data).toEqual(data);
    });
  });
});
