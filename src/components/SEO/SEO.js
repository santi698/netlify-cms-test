import React, { Component } from 'react';
import Helmet from 'react-helmet';
import urljoin from 'url-join';
import config from '../../../data/SiteConfig';

class SEO extends Component {
  render() {
    const { postNode, postPath, postSEO } = this.props;
    let title;
    let description;
    let image;
    let postURL;
    if (postSEO) {
      const postMeta = postNode.frontmatter;
      ({ title } = postMeta);
      description = postMeta.description ? postMeta.description : postNode.excerpt;
      image = postMeta.image.childImageSharp.fluid.src;
      postURL = urljoin(config.siteUrl, config.pathPrefix, postPath);
    } else {
      title = config.siteTitle;
      description = config.siteDescription;
      image = config.siteLogo;
    }
    image = urljoin(config.siteUrl, config.pathPrefix, image);
    const blogURL = urljoin(config.siteUrl, config.pathPrefix);
    const schemaOrgJSONLD = [
      {
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        url: blogURL,
        name: title,
        alternateName: config.siteTitleAlt ? config.siteTitleAlt : ''
      }
    ];
    if (postSEO) {
      schemaOrgJSONLD.push(
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': postURL,
                name: title,
                image
              }
            }
          ]
        },
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url: blogURL,
          name: title,
          alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image
          },
          description
        }
      );
    }
    return (
      <Helmet>
        {/* General tags */}
        <meta content={description} name="description" />
        <meta content={image} name="image" />

        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>

        {/* OpenGraph tags */}
        <meta content={postSEO ? postURL : blogURL} property="og:url" />
        {postSEO ? <meta content="article" property="og:type" /> : null}
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={image} property="og:image" />
        <meta content={config.siteFBAppID ? config.siteFBAppID : ''} property="fb:app_id" />

        {/* Twitter Card tags */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={config.userTwitter ? config.userTwitter : ''} name="twitter:creator" />
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
        <meta content={image} name="twitter:image" />
      </Helmet>
    );
  }
}

export default SEO;
