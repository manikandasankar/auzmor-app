import React from 'react';

const Header = () => (
  <div className="group" id="header" role="banner">
    <div className="group" id="header-inner">
      <div id="logo">
        <a href="/">
          <img alt="dribbble" src="https://cdn.dribbble.com/assets/logo-bw-0200c7483844c355752e89efaa4ba89b83c9c591d70254ba10f4b25d901359d0.gif" />
        </a>
      </div>
      <a href="#nav" id="toggle-nav">Toggle navigation</a>
      <ul id="nav" role="navigation">
        <li id="t-search" role="search">
          <form action="https://dribbble.com/search" id="search">
            <input className="search-text" name="q" placeholder="Search" type="text" value="" />
          </form>
        </li>
        <li id="t-signin">
          <a href="https://dribbble.com/session/new?return_to=%2Fshots%2F3978177-Animation-Cryptocurrency-Marketplace-Light">
            <span>Sign in</span>
          </a>
        </li>
        <li id="t-signup">
          <a href="https://dribbble.com/signup/new" rel="noopener noreferrer" target="_blank">Sign up</a>
        </li>
        <li id="t-shots">
          <a className="has-sub" href="https://dribbble.com/shots" rel="noopener noreferrer" target="_blank">Shots</a>
          <ul className="tabs">
            <li><a href="https://dribbble.com/shots" rel="noopener noreferrer" target="_blank">Popular</a></li>
            <li><a href="https://dribbble.com/shots?sort=recent" rel="noopener noreferrer" target="_blank">Recent</a></li>
            <li><a href="https://dribbble.com/shots?list=debuts" rel="noopener noreferrer" target="_blank">Debuts</a></li>
            <li><a href="https://dribbble.com/shots?list=teams" rel="noopener noreferrer" target="_blank">Teams</a></li>
            <li><a href="https://dribbble.com/shots?list=playoffs" rel="noopener noreferrer" target="_blank">Playoffs</a></li>
            <li className="separate"><a href="https://dribbble.com/highlights" rel="noopener noreferrer" target="_blank">Highlights</a></li>
            <li><a href="https://dribbble.com/projects" rel="noopener noreferrer" target="_blank">Projects</a></li>
            <li><a href="https://dribbble.com/goods" rel="noopener noreferrer" target="_blank">Goods by Designers</a></li>
          </ul>
        </li>
        <li id="t-players">
          <a className="has-sub" href="https://dribbble.com/designers" rel="noopener noreferrer" target="_blank">Designers</a>
          <ul className="tabs">
            <li><a href="https://dribbble.com/designers?group=members" rel="noopener noreferrer" target="_blank">Designers only</a></li>
            <li><a href="https://dribbble.com/teams">Design Teams only</a></li>
            <li className="separate"><a href="https://dribbble.com/teams/info" rel="noopener noreferrer" target="_blank">Add Your Design Team</a></li>
          </ul>
        </li>
        <li id="t-blog">
          <a className="has-sub" href="https://dribbble.com/stories" rel="noopener noreferrer" target="_blank">Blog</a>
          <ul className="tabs">
            <li><a href="https://dribbble.com/stories" rel="noopener noreferrer" target="_blank">Latest Stories</a></li>
            <li className="separate"><a href="https://dribbble.com/stories/2017/12/21/wix-playground-playoff-winners" rel="noopener noreferrer" target="_blank">Wix Playground Playoff Winners</a></li>
            <li><a className="/stories/2017/12/21/shot-block-10x17">Shot Block: 10x17</a></li>
            <li><a className="/stories/2017/12/19/product-hunt-global-hackathon-winners-announced">Product Hunt Global Hackathon Winners Announced</a></li>
          </ul>
        </li>
        <li id="t-podcast">
          <a className="has-sub" href="https://dribbble.com/overtime" rel="noopener noreferrer" target="_blank">Podcast</a>
          <ul className="tabs">
            <li><a href="https://dribbble.com/overtime" rel="noopener noreferrer" target="_blank">Latest Episodes</a></li>
            <li className="separate"><a href="https://dribbble.com/overtime/2017/12/12/episode-27-ryan-hamrick" rel="noopener noreferrer" target="_blank">Episode 27: Ryan Hamrick</a></li>
            <li><a href="https://dribbble.com/overtime/2017/11/28/episode-26-khoi-vinh" rel="noopener noreferrer" target="_blank">Episode 26: Khoi Vinh</a></li>
            <li><a href="https://dribbble.com/overtime/2017/11/14/episode-25-vlad-magdalin" rel="noopener noreferrer" target="_blank">Episode 25:  Vlad Magdalin</a></li>
            <li className="separate">
              <a className="separate" href="https://itunes.apple.com/us/podcast/overtime/id1068288639" rel="noopener noreferrer" target="_blank">Listen in iTunes</a>
            </li>
          </ul>
        </li>
        <li id="t-meetups">
          <a className="has-sub" href="https://dribbble.com/meetups" rel="noopener noreferrer" target="_blank">Meetups</a>
          <ul className="tabs">
            <li><a href="https://dribbble.com/meetups" rel="noopener noreferrer" target="_blank">Dribbble Meetups</a></li>
            <li className="separate"><a href="https://dribbble.com/meetups/new" rel="noopener noreferrer" target="_blank">Host a Meetup</a></li>
          </ul>
        </li>
        <li id="t-jobs">
          <a href="https://dribbble.com/jobs" rel="noopener noreferrer" target="_blank">Jobs</a>
          <ul className="tabs">
            <li><a href="https://dribbble.com/jobs" rel="noopener noreferrer" target="_blank">All</a></li>
            <li><a href="https://dribbble.com/jobs?location=Anywhere" rel="noopener noreferrer" target="_blank">Remote / Anywhere</a></li>
            <li><a href="https://dribbble.com/jobs?teams_only=true" rel="noopener noreferrer" target="_blank">Teams Hiring</a></li>
            <li className="separate"><a href="https://dribbble.com/jobs/info" rel="noopener noreferrer" target="_blank">Post a Job</a></li>
          </ul>
        </li>
        <li id="t-hiring">
          <a href="https://dribbble.com/hiring" rel="noopener noreferrer" target="_blank">Hiring</a>
          <ul className="tabs">
            <li><a href="https://dribbble.com/hiring" rel="noopener noreferrer" target="_blank">Hiring at Dribbble</a></li>
            <li className="separate"><a href="https://dribbble.com/jobs/info" rel="noopener noreferrer" target="_blank">Post a Job</a></li>
            <li><a href="https://dribbble.com/scout/info" rel="noopener noreferrer" target="_blank">Scout Designers</a></li>
            <li><a href="https://dribbble.com/teams/info" rel="noopener noreferrer" target="_blank">Add Your Design Team</a></li>
            <li className="external"><a href="https://crew.co/?utm_source=dribbble&amp;utm_content=dribbble-scout-nav" rel="noopener noreferrer" target="_blank">Post a Project on Crew</a></li>
          </ul>
        </li>
        <li id="t-more">
          <a href="https://dribbble.com/about" rel="noopener noreferrer" target="_blank">
            <span>More</span>
          </a>
          <ul className="tabs">
            <li><a href="https://dribbble.com/about" rel="noopener noreferrer" target="_blank">About</a></li>
            <li><a href="http://shop.dribbble.com/" rel="noopener noreferrer" target="_blank">Shop</a></li>
            <li><a href="http://help.dribbble.com/" rel="noopener noreferrer" target="_blank">Support</a></li>
            <li className="separate"><a href="https://dribbble.com/places" rel="noopener noreferrer" target="_blank">Places</a></li>
            <li className="separate"><a href="https://dribbble.com/buckets" rel="noopener noreferrer" target="_blank">Buckets</a></li>
            <li><a href="https://dribbble.com/colors" rel="noopener noreferrer" target="_blank">Colors</a></li>
            <li className="separate"><a href="https://dribbble.com/integrations" rel="noopener noreferrer" target="_blank">Integrations</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
);

Header.propTypes = {
  // Todo: Properties
};

Header.defaultProps = {
  // Todo: default Properties
};

export default Header;
