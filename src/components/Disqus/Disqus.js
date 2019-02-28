import React, { Component } from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import urljoin from 'url-join';
import config from '../../../data/SiteConfig';

class Disqus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toasts: []
    };
    this.notifyAboutComment = this.notifyAboutComment.bind(this);
    this.onSnackbarDismiss = this.onSnackbarDismiss.bind(this);
  }

  onSnackbarDismiss() {
    const [, ...toasts] = this.state.toasts;
    this.setState({ toasts });
  }

  notifyAboutComment() {
    this.setState((prevState) => {
      const toasts = prevState.toasts.slice();
      toasts.push({ text: 'New comment available!' });
      return { toasts };
    });
  }

  render() {
    const { postNode } = this.props;
    if (!config.disqusShortname) {
      return null;
    }
    const post = postNode.frontmatter;
    const url = urljoin(config.siteUrl, config.pathPrefix, postNode.fields.slug);
    return (
      <ReactDisqusComments
        category_id={post.category_id}
        identifier={post.title}
        onNewComment={this.notifyAboutComment}
        shortname={config.disqusShortname}
        title={post.title}
        url={url}
      />
    );
  }
}

export default Disqus;
