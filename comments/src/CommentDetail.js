import React from 'react';
import avatar from './assets/avatar.png';

const CommentDetail = ({author, timeAgo, postText}) => {
  return (
    <div className='comment'>
      <a href='/' className='avatar'>
        <img src={avatar} alt='avatar' />
      </a>
      <div className='content'>
        <a href='/' className='author'>
          {author}
        </a>
        <div className='metadata'>
          <span className='date'>{timeAgo}</span>
        </div>
        <div className='text'>{postText}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
