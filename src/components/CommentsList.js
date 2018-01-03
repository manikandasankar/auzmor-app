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
            {commentsList.length} Responses
          </h2>
          <div className="comments-sort">
            <a className={className(`oldest ${isOldestSelected}`)} href="" id="oldest" onClick={(e) => { this.sortComments(e, 'oldest'); }}>oldest</a>
            <a className={className(`newest ${isLatestSelected}`)} href="" id="newest" onClick={(e) => { this.sortComments(e, 'latest'); }}>newest</a>
            <a className={className(`liked ${islikedSelected}`)} href="" id="liked" onClick={(e) => { this.sortComments(e, 'liked'); }}>liked</a>
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

/**
 * @description Map the state objects (as props) that are required to render the details in the UI
 */
function mapStateToProps(state) {
  return {
    commentsList: state.comments.commentsList,
  };
}

/**
 * @description Map the state objects (as props) that are required to render the details in the UI
 */
function mapDispatchToProps(dispatch) {
  return {
    getCommentsList: bindActionCreators(getCommentsList, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList);
