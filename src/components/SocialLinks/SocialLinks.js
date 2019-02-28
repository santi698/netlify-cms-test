import React, { Component } from 'react';
import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  RedditShareButton,
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  RedditShareCount,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  GooglePlusIcon,
  LinkedinIcon,
  RedditIcon
} from 'react-share';
import urljoin from 'url-join';
import config from '../../../data/SiteConfig';
import './SocialLinks.css';

class SocialLinks extends Component {
  render() {
    const { postNode, postPath, mobile } = this.props;
    const post = postNode.frontmatter;
    const url = urljoin(config.siteUrl, config.pathPrefix, postPath);
    const iconSize = mobile ? 36 : 48;
    const filter = (count) => (count > 0 ? count : '');
    const renderShareCount = (count) => <div className="share-count">{filter(count)}</div>;

    return (
      <div className="social-links">
        <RedditShareButton title={post.title} url={url}>
          <RedditIcon round size={iconSize} />
          <RedditShareCount url={url}>{(count) => renderShareCount(count)}</RedditShareCount>
        </RedditShareButton>
        <TwitterShareButton title={post.title} url={url}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
        <GooglePlusShareButton url={url}>
          <GooglePlusIcon round size={iconSize} />
          <GooglePlusShareCount url={url}>
            {(count) => renderShareCount(count)}
          </GooglePlusShareCount>
        </GooglePlusShareButton>
        <FacebookShareButton quote={postNode.excerpt} url={url}>
          <FacebookIcon round size={iconSize} />
          <FacebookShareCount url={url}>{(count) => renderShareCount(count)}</FacebookShareCount>
        </FacebookShareButton>
        <LinkedinShareButton description={postNode.excerpt} title={post.title} url={url}>
          <LinkedinIcon round size={iconSize} />
          <LinkedinShareCount url={url}>{(count) => renderShareCount(count)}</LinkedinShareCount>
        </LinkedinShareButton>
        <TelegramShareButton url={url}>
          <TelegramIcon round size={iconSize} />
        </TelegramShareButton>
      </div>
    );
  }
}

export default SocialLinks;
