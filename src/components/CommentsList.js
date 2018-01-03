import React from 'react';

const CommentsList = () => (
  <div id="comments-section">
    <div id="comments-section">
      <h2 className="count section ">
        7 Responses
      </h2>
      <div className="comments-sort">
        <a className="oldest selected" href="">oldest</a>
        <a className="newest " href="">newest</a>
        <a className="liked " href="">liked</a>
      </div>
      <ol className="comments" id="comments">
        <li className="response comment group" id="comment-6750795">
          <h2>
            <a className="url hoverable" href="">
              <img alt="" className="photo" src="https://cdn.dribbble.com/users/1256118/avatars/small/2c8e4297c8b557a67df3e57e2c908d8c.jpg?1505983286" />
              Gray
            </a>
          </h2>
          <div className="comment-body">
            <p>Well done! Come to check my works if you want ✌🏻</p>
          </div>
          <span className="comment-meta-likes">
            <a className="likes-list" href="/comments/6750795/likes">1</a><span className="hide">likes</span>
          </span>
          <p className="comment-meta">
            <a className="posted" href="">about 1 month ago</a>
          </p>
        </li>
      </ol>
    </div>
  </div>
);

CommentsList.propTypes = {
  // Todo: Properties
};

CommentsList.defaultProps = {
  // Todo: default Properties
};

export default CommentsList;
