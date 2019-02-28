import React, { useState } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';

import PostCard from '../PostCard';

const Search = styled.input`
  background: transparent;
  border: 1px solid rgba(45, 49, 63, 0.22);
  font-weight: 300;
  width: 360px;
  padding: 20px;
  font-size: 16px;
`;

function PostListing({ className, postEdges }) {
  const getPostList = () => {
    return postEdges.map((postEdge) => ({
      path: postEdge.node.fields.slug,
      categories: postEdge.node.frontmatter.categories,
      image: postEdge.node.frontmatter.image,
      title: postEdge.node.frontmatter.title,
      author: postEdge.node.frontmatter.author,
      date: postEdge.node.frontmatter.date,
      excerpt: postEdge.node.frontmatter.excerpt,
      timeToRead: postEdge.node.timeToRead
    }));
  };

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className={className}>
      <section className="PostList">
        {/* Your post list here. */
        getPostList().map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </section>
      <section className="Sidebar">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            return navigate(`/search?q=${searchQuery}`);
          }}
        >
          <label>
            <Search
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Buscador de artículos"
              type="text"
              value={searchQuery}
            />
          </label>
        </form>
      </section>
    </div>
  );
}

export default styled(PostListing)`
  display: flex;
  flex-direction: row;
  padding: 30px 0;

  .PostList {
    flex: 4;
  }

  .Sidebar {
    flex: 2;
    margin-left: 120px;
  }
`;
