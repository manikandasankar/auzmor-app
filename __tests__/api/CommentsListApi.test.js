import { fetchCommentsList } from '../../src/api/CommentsListApi';

describe('CommentsList Api', () => {
  it('comments list api with success', () => {
    fetch.mockResponseOnce(JSON.stringify({}));
    return fetchCommentsList().then(data => {
      expect(data).toBeDefined();
    });
  });

  it('comments list api with success', () => {
  	const error = { status: 404 };
    fetch.mockResponseOnce(JSON.stringify(error), error);
    return fetchCommentsList().catch(data => {
      expect(data).toBe('Not Found');
    });
  });
});