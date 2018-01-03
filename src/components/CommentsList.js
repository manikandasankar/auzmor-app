import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import className from 'classnames';
import { getCommentsList } from '../store/actions/CommentsList';

class CommentsList extends Component {
  constructor() {
    super();
    this.state = {
      isOldestSelected: '',
      isLatestSelected: 'selected',
      islikedSelected: '',
    };
  }

  componentDidMount() {
    this.props.getCommentsList('latest');
  }

  /**
   * @description Function to filter comments based on type
   * @param {object} - e - event for the respective action performed.
   * @param {string} - type - selected type
   */
  sortComments = (e, type) => {
    e.preventDefault();
    this.setState({
      isOldestSelected: type === 'oldest' ? 'selected' : '',
      isLatestSelected: type === 'latest' ? 'selected' : '',
      islikedSelected: type === 'liked' ? 'selected' : '',
    });
    this.props.getCommentsList(type);
  }

  render() {
    const { commentsList } = this.props;
    const { isOldestSelected, isLatestSelected, islikedSelected } = this.state;
    return (
      <div id="comments-section">
        <div id="comments-section">
          <h2 className="count section ">
            7 Responses
          </h2>
          <div className="comments-sort">
            <a className={className(`oldest ${isOldestSelected}`)} href="" onClick={(e) => { this.sortComments(e, 'oldest'); }}>oldest</a>
            <a className={className(`newest ${isLatestSelected}`)} href="" onClick={(e) => { this.sortComments(e, 'latest'); }}>newest</a>
            <a className={className(`liked ${islikedSelected}`)} href="" onClick={(e) => { this.sortComments(e, 'liked'); }}>liked</a>
          </div>
          <ol className="comments" id="comments">
            {
              commentsList.map((key, index) => (
                <li className="response comment group" key={index}>
                  <h2>
                    <a className="url hoverable" href="">
                      <img alt="" className="photo" src={key.url} />
                      {key.userName}
                    </a>
                  </h2>
                  <div className="comment-body">
                    <p>{key.comment}</p>
                  </div>
                  {key.likesCount &&
                    <span className="comment-meta-likes">
                      <a className="likes-list" href="/comments/6750795/likes">{key.likesCount}</a><span className="hide">likes</span>
                    </span>
                  }
                  <p className="comment-meta">
                    <a className="posted" href="">{key.postedOn}</a>
                  </p>
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    commentsList: state.comments.commentsList,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCommentsList: bindActionCreators(getCommentsList, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
