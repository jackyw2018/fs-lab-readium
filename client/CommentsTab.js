import React from 'react';
import { Comment } from './SingleStory';
const CommentsTab = ({ author, comments }) => {
  return (
    <div>
      {comments.map(comment => (
        <Comment
          key={comment.id}
          commentAuthor={author.name}
          commentContent={comment.content}
          authorImgUrl={author.imageUrl}
        />
      ))}
    </div>
  );
};

export default CommentsTab;
