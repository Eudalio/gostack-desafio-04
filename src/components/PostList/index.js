import React, { useState } from 'react';
import listaPosts from './dados.js';

import './styles.css';
import PostItem from '../Posts';


function PostList() {
  const [posts] = useState(listaPosts)

  return (
    <div className="content">
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default PostList;