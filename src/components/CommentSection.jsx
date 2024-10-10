import React from "react";
import Comments from "./Comments";  // Make sure the file name matches exactly

function CommentSection({ comments }) {
  return (
    <div>
      <h2>{comments.length} Comments</h2>
      <ul>
        {comments.map((comment) => (
          <Comments key={comment.id} user={comment.user} text={comment.comment} />
        ))}
      </ul>
    </div>
  );
}

export default CommentSection;






