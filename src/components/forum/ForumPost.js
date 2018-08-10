import React, {PropTypes} from 'react';

const ol = {
  fontStyle: 'italic', 
  fontFamily: 'Georgia, Times, serif', 
  fontSize: '22px', 
  color: '#000'
};

const oli = {
  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)',
  borderRadius: '10px',
  background: '#67C8FF'
};

const olip = {
  padding: '8px', 
  fontStyle: 'normal', 
  fontFamily: 'Arial', 
  fontSize: '15px', 
  color: '#FFF'
};

const ForumPosts = ({posts}) => {
  return (
    <ol style={ol}>
    {posts.map((post) =>
      <li style={oli} key={post.id}><p style={olip}>{post.content}</p></li>
    )}
  </ol>
  );
};

ForumPosts.propTypes = {
  posts: PropTypes.array.isRequired
};

export default ForumPosts;
