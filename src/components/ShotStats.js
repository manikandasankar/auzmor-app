import React, { Component } from 'react';
import className from 'classnames';

const colorPalettes = [{
  url: 'https://dribbble.com/colors/F1F3F8',
  colorName: 'F1F3F8',
}, {
  url: 'https://dribbble.com/colors/DDE2F0',
  colorName: 'DDE2F0',
}, {
  url: 'https://dribbble.com/colors/4864F3',
  colorName: '4864F3',
}, {
  url: 'https://dribbble.com/colors/CAE8D4',
  colorName: 'CAE8D4',
}, {
  url: 'https://dribbble.com/colors/889FF6',
  colorName: '889FF6',
}, {
  url: 'https://dribbble.com/colors/9199A1',
  colorName: '9199A1',
}];

const shareOptions = [{
  url: 'https://twitter.com',
  name: 'share on Twitter',
  type: 'twitter',
}, {
  url: 'ttps://fb.com',
  name: 'Share on Facebook',
  type: 'facebook',
}, {
  url: 'https://pinterest.com',
  name: 'Share on Pinterest',
  type: 'pinterest',
}, {
  url: 'https://tumblr.com',
  name: 'Share on Tumblr',
  type: 'tumblr',
}, {
  url: 'https://dribbble.com/colors/889FF6',
  name: 'Share via Email',
  type: 'email',
}];

class ShotStats extends Component {
  constructor() {
    super();
    this.state = {
      showSocialShareSheet: false,
    };
  }

  /**
   * @description Function to update state for showing or hiding social share section
   * @param {object} e - Event for the respective action performed.
   */
  showOrHideSocialShareSection = (e) => {
    e.preventDefault();
    const { showSocialShareSheet } = this.state;
    this.setState({
      showSocialShareSheet: !showSocialShareSheet,
    });
  };

  render() {
    const { showSocialShareSheet } = this.state;
    return (
      <ul className="shot-stats">
        <li>
          <a className="stats-action like-shot" href="https://dribbble.com/signup/new" title="Like this shot">
            <img alt="Icon shotstat like" src="https://cdn.dribbble.com/assets/icon-shotstat-like-6a1e9e9db48b9b788639f05a658379b7bb027a75d256127f812bf9392664396f.png" />
            <span className="stats-label">Like?</span>
          </a>
          <a className="likes-count stats-num" href="https://dribbble.com/shots/3978177-Animation-Cryptocurrency-Marketplace-Light/fans">
          238
          <span className="stats-num-label">
          likes
          </span>
          </a>
        </li>
        <li className="shot-stats-share">
          <a
            className={className('stats-action share-shot', {
              expanded: showSocialShareSheet,
            })} href="" id="shareButton"
            onClick={(e) => { this.showOrHideSocialShareSection(e); }}
          >
            <img alt="Icon shotstat share" src="https://cdn.dribbble.com/assets/icon-shotstat-share-128ae71c26985fc7325ac5362aba434686f12fdfffa45ed874262a19f923b071.png" />
            <span className="stats-label">Share</span>
          </a>
          <span className="views-count stats-num">5,074 views</span>
          {showSocialShareSheet &&
            <div className="share-btns" style={{ display: 'block' }}>
              <div className="share-sheet">
                {
                  shareOptions.map((key, index) => (
                    <a
                      className={`share-${key.type}`} href={key.url} key={index} rel="noopener noreferrer"
                      target="_blank" title={key.name}
                    >{key.name}</a>
                  ))
                }
              </div>
            </div>
          }
        </li>
        <li className="shot-stats-colors">
          <a className="stats-action" href="https://dribbble.com/shots/3978177-Animation-Cryptocurrency-Marketplace-Light/colors.aco" title="Download this color palette (.aco)">
            <img alt="Icon shotstat drop" height="20 " src="https://cdn.dribbble.com/assets/icon-shotstat-drop-0152bfcbd3cb7ed50e73b830df47c754f061a376a662eac8841ad45316598d97.png" width="20" />
          </a>
          <ul className="color-chips group">
            {
              colorPalettes.map((key, index) => (
                <li className="color" key={index}>
                  <a
                    href={key.url} rel="noopener noreferrer" style={{ backgroundColor: `#${key.colorName}` }}
                    target="_blank" title={key.colorName}
                  >{key.colorName}</a>
                </li>))
            }
          </ul>
        </li>
      </ul>
    );
  }
}

export default ShotStats;
