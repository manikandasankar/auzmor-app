import React from 'react';
import className from 'classnames';
import CommentsList from '../components/CommentsList';
import TagsSection from '../components/TagsSection';
import MoreSection from '../components/MoreSection';
import ShotStats from '../components/ShotStats';

export default class HomeContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      showZoomableImage: false,
    };
  }

  /**
   * @description Function to show or hide the zoomable image.
   * @param {object} - e - event of the respective action performed.
   */
  showOrHideZoomableImage = (e) => {
    e.preventDefault();
    const { showZoomableImage } = this.state;
    this.setState({
      showZoomableImage: !showZoomableImage,
    });
  };

  render() {
    const { showZoomableImage } = this.state;
    return (
      <div id="wrap">
        <div id="wrap-inner">
          <div id="content" role="main">
            <div className="non-overlay group">
              <div className="slat-header user ">
                <a className="url hoverable" href="https://dribbble.com/RonDesignLab" rel="noopener noreferrer" target="_blank" title="Ron Design">
                  <picture>
                    <source media="(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-device-pixel-ratio: 1.5), (min-resolution: 1.5dppx)" srcSet="https://cdn.dribbble.com/users/834691/avatars/normal/9006fd85d117c7d3bc8a9e949dc01fcb.png?1430481893" />
                    <source srcSet="https://cdn.dribbble.com/users/834691/avatars/small/9006fd85d117c7d3bc8a9e949dc01fcb.png?1430481893" />
                    <img alt="avatar img" className="photo" src="https://cdn.dribbble.com/users/834691/avatars/small/9006fd85d117c7d3bc8a9e949dc01fcb.png?1430481893" />
                  </picture>
                </a>
                <h1>Animation Cryptocurrency Marketplace (Light)</h1>
                <h2 className="shot-byline">
                  <span className="attribution is-team">
                    <span className="shot-byline-user">by
                      <a className="url hoverable" href="https://dribbble.com/RonDesignLab" rel="noopener noreferrer" target="_blank">Ron Design</a>
                    </span>
                  </span>
                  <span className="shot-byline-date">on Nov 28, 2017</span>
                </h2>
              </div>
              <div
                className={className('main-shot zoomable', {
                  'full-800': showZoomableImage,
                })}
              >
                <div className="the-shot">
                  <div className="single group">
                    <div className="single-grid">
                      <div className="single-img">
                        <a href="" id="zoomableImageSection" onClick={(e) => { this.showOrHideZoomableImage(e); }}>
                          <img alt="Crypto dashboard" src="https://cdn.dribbble.com/users/834691/screenshots/3978177/crypto_dashboard.gif" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="screenshot-info-wrapper">
                  <div className="screenshot-conversation has-comments">
                    <div className="shot-desc">
                      <p>It’s a platform destined for keeping up-to-date information
                      about all your accounts on other crypto platforms and managing them.</p>
                      <p><strong>We are available for new projects</strong> -
                        <a href="mailto:ron.e@rondesignlab.com" rel="noreferrer nofollow" >ron.e@rondesignlab.com</a>
                      </p>
                    </div>
                    <CommentsList />
                  </div>
                  <div className="screenshot-meta is-team">
                    <ShotStats />
                    <MoreSection />
                    <h3 className="meta-head">Tags</h3>
                    <TagsSection />
                  </div>
                </div>
              </div>
              <div id="kbd-legend">
                <p>keyboard shortcuts:
                  <span><strong>L</strong> or <strong>F</strong> like</span>
                  <span><strong>Z</strong> toggle zoom</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
