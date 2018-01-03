import React from 'react';

const Footer = () => (
  <div id="footer" role="contentinfo">
    <div id="footer-inner">
      <div className="group">
        <div className="footer-mod">
          <p className="logo">
            <a href="/">
              <img alt="dribbble" src="https://cdn.dribbble.com/assets/logo-footer-hd-a05db77841b4b27c0bf23ec1378e97c988190dfe7d26e32e1faea7269f9e001b.png" width="80" />
            </a><br />Show and tell for designers</p>
          <p className="about">What are you working on? Dribbble is a community of designers sharing screenshots of their work, process, and projects.</p>
          <p className="follow">
            <a href="https://dribbble.com/dribbble" rel="noopener noreferrer" target="_blank"><img alt="Icon team dribbble" src="https://cdn.dribbble.com/assets/icon-team-dribbble-8706862cdb0afa7f43f9e0218b073515f0a2bef19780961d324ae4620ebe249b.png" width="24" /></a>
            <a href="http://twitter.com/dribbble"><img alt="Icon team twitter" src="https://cdn.dribbble.com/assets/icon-team-twitter-1fa6921d96b16e47f00ad0381ebbab59ba089c22b21f9bce783c9a4a077f40e9.png" width="24" /></a>
            <a href="http://facebook.com/dribbble"><img alt="Icon team facebook" src="https://cdn.dribbble.com/assets/icon-team-facebook-4d63851997b88eb903858057327d93df9f950a55c5104a3a19206f2005682ea3.png" width="24" /></a>
            <a href="http://instagram.com/dribbble">
              <img alt="Icon team instagram" src="https://cdn.dribbble.com/assets/icon-team-instagram-5dfdcd1478ea4a1c1e109b32adbd3878062aa1eb571da63ac379e0da1d2d5762.png" width="24" />
            </a>
            <a href="https://dribbble.com/stories" rel="noopener noreferrer" target="_blank">
              <img alt="Icon team blog" src="https://cdn.dribbble.com/assets/icon-team-blog-2705adcb7ee6522051e175d10683208f0fa0ad17daa15fdf3f36aca99c540312.png" width="24" />
            </a>
          </p>
        </div>
        <div className="footer-mod">
          <div className="extra-links">
            <h3><a href="https://dribbble.com/">Dribbble</a></h3>
            <ul>
              <li><a href="https://dribbble.com/about" id="f-home" rel="noopener noreferrer" target="_blank">About</a></li>
              <li><a href="http://help.dribbble.com">Help</a></li>
              <li><a href="https://dribbble.com/contact" rel="noopener noreferrer" target="_blank">Contact</a></li>
              <li><a href="https://dribbble.com/careers" rel="noopener noreferrer" target="_blank">Careers</a></li>
              <li><a href="https://dribbble.com/terms" rel="noopener noreferrer" target="_blank">Terms</a></li>
              <li><a href="https://dribbble.com/guidelines" rel="noopener noreferrer" target="_blank">Guidelines</a></li>
              <li><a href="https://dribbble.com/privacy" rel="noopener noreferrer" target="_blank">Privacy</a></li>
              <li><a href="http://shop.dribbble.com/" rel="noopener noreferrer" target="_blank">Shop</a></li>
              <li><a href="https://dribbble.com/testimonials" rel="noopener noreferrer" target="_blank">Testimonials</a></li>
              <li><a href="https://dribbble.com/branding" rel="noopener noreferrer" target="_blank">Brand</a></li>
              <li><a href="https://dribbble.com/advertise" rel="noopener noreferrer" target="_blank">Advertise</a></li>
              <li><a href="http://developer.dribbble.com">API</a></li>
              <li><a href="https://dribbble.com/integrations" rel="noopener noreferrer" target="_blank">Integrations</a></li>
              <li><a href="https://dribbble.com/ios" rel="noopener noreferrer" target="_blank">iOS App</a></li>
            </ul>
          </div>
          <div className="hiring-links">
            <h3><a href="https://dribbble.com/hiring" rel="noopener noreferrer" target="_blank">Hiring at Dribbble</a></h3>
            <ul>
              <li><a href="https://dribbble.com/jobs/info" rel="noopener noreferrer" target="_blank">Post a job</a></li>
              <li><a href="https://dribbble.com/scout/info" rel="noopener noreferrer" target="_blank">Scout designers</a></li>
              <li><a href="https://dribbble.com/teams/info" rel="noopener noreferrer" target="_blank">Add your team</a></li>
              <li><a className="external" href="https://crew.co/?utm_source=dribbble&amp;utm_content=dribbble-scout-nav" rel="noopener noreferrer" target="_blank">Crew: Hire freelancers</a></li>
            </ul>
          </div>
          <div className="job-links">
            <h3><a href="https://dribbble.com/jobs" rel="noopener noreferrer" target="_blank">Jobs for Designers</a></h3>
            <ol className="jobs-list">
              <li className="group">
                <a className="item-team" href="https://dribbble.com/mixpanel" rel="noopener noreferrer" target="_blank" title="Visit the team’s profile" >
                  <img alt="Mixpanel badge 250px 1.1" src="https://cdn.dribbble.com/users/42592/avatars/normal/mixpanel_badge_250px_1.1.png?1359398942" />
                </a>
                <a className="job-edit" href="https://dribbble.com/account/jobs/13801/edit" rel="noopener noreferrer" target="_blank" title="Edit this job">
                  <img alt="Icon edit button" src="https://cdn.dribbble.com/assets/icon-edit-button-8d0f2493aa649d9e18d5cf27ee32c93aaa6488ddda85b481f6ca341b85fde845.png" />
                </a>
                <a className="item-link group" href="https://dribbble.com/jobs/13801?source=footer" rel="noopener noreferrer" target="_blank">
                  <span className="item-info">
                    <span className="item-title">Mixpanel</span>
                    <span className="item-desc">Product Designer</span>
                  </span>
                  <span className="item-meta">San Francisco</span>
                </a>
              </li>
              <li className="group">
                <a className="item-team" href="https://dribbble.com/hashicorp" rel="noopener noreferrer" target="_blank" title="Visit the team’s profile" >
                  <img alt="2189cc784347f2abd0eafd03d780da26" src="https://cdn.dribbble.com/users/1355092/avatars/normal/2189cc784347f2abd0eafd03d780da26.png?1492042935" />
                </a>
                <a className="job-edit" href="https://dribbble.com/account/jobs/14017/edit" rel="noopener noreferrer" target="_blank">
                  <img alt="Icon edit button" src="https://cdn.dribbble.com/assets/icon-edit-button-8d0f2493aa649d9e18d5cf27ee32c93aaa6488ddda85b481f6ca341b85fde845.png" />
                </a>
                <a className="item-link group" href="https://dribbble.com/jobs/14017?source=footer" rel="noopener noreferrer" target="_blank">
                  <span className="item-info">
                    <span className="item-title">HashiCorp</span>
                    <span className="item-desc">Product Designer - Consul</span>
                  </span>
                  <span className="item-meta">San Francisco, CA</span>
                </a>
              </li>
              <li className="group">
                <a className="item-team" href="https://dribbble.com/OxygenApp" rel="noopener noreferrer" target="_blank" title="Visit the team’s profile">
                  <img alt="7ce4dab3022eeaf4a1deea263d6efeb4" src="https://cdn.dribbble.com/users/1315085/avatars/normal/7ce4dab3022eeaf4a1deea263d6efeb4.png?1470484110" />
                </a>
                <a className="job-edit" rel="noopener noreferrer" target="_blank" title="Edit this job" >
                  <img alt="Icon edit button" src="https://cdn.dribbble.com/assets/icon-edit-button-8d0f2493aa649d9e18d5cf27ee32c93aaa6488ddda85b481f6ca341b85fde845.png" />
                </a>
                <a className="item-link group" href="https://dribbble.com/jobs/14128?source=footer" rel="noopener noreferrer" target="_blank">
                  <span className="item-info">
                    <span className="item-title">Oxygen</span>
                    <span className="item-desc">OxygenApp.com Website Redesign</span>
                  </span>
                  <span className="item-meta">Anywhere</span>
                </a>
              </li>
            </ol>
          </div>
        </div>
        <div className="footer-mod">
          <div className="ad carbon target">
            <div id="carbonads">
              <span>
                <span className="carbon-wrap">
                  <a className="carbon-img" href="https://dribbble.com/overtime" rel="noopener noreferrer" target="_blank">
                    <img alt="Overtime ad" src="https://cdn.dribbble.com/assets/overtime-ad-8453e6307f1e70254171568b7d4e733be2e98231e6d3c3a93041c588feb3ced1.png" width="130" />
                  </a>
                  <a className="carbon-text" href="https://dribbble.com/overtime" rel="noopener noreferrer" target="_blank">
                    Dribbble’s official podcast goes behind the shots of your favorite designers.
                  </a>
                </span>
                <a className="carbon-poweredby" href="https://dribbble.com/overtime" rel="noopener noreferrer" target="_blank">Listen to Overtime</a>
              </span>
            </div>
          </div>
          <h4 className="group" id="pixels-total">
            <strong>900,394,686,082</strong> pixels dribbbled
          </h4>
        </div>
      </div>
      <p className="network">
        We’re <a href="http://tiny.website/?utm_content=footer-network" rel="noopener noreferrer" target="_blank">Tiny</a> along with
        <a href="https://www.designernews.co/?utm_content=footer-network" rel="noopener noreferrer" target="_blank">Designer News</a>,
        <a href="https://crew.co/?utm_content=footer-network" rel="noopener noreferrer" target="_blank">Crew</a>,
        <a href="http://metalab.co/?utm_content=footer-network" rel="noopener noreferrer" target="_blank">MetaLab</a>,
        <a href="https://www.getflow.com/?utm_content=footer-network" rel="noopener noreferrer" target="_blank">Flow</a>,
        <a href="https://www.pixelunion.net/?utm_content=footer-network" rel="noopener noreferrer" target="_blank">Pixel Union</a>,
        <a href="https://weworkremotely.com/?utm_content=footer-network" rel="noopener noreferrer" target="_blank">We Work Remotely</a> and more.
        &copy; 2018 Dribbble. All rights reserved.
      </p>
    </div>
  </div>
);

Footer.propTypes = {
  // Todo: Properties
};

Footer.defaultProps = {
  // Todo: default Properties
};

export default Footer;
