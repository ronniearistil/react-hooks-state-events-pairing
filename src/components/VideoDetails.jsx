import React, { useState } from 'react';

function VideoDetails({ title, views, timestamp, upvotes, downvotes }) {
  const [upvoteCount, setUpvoteCount] = useState(upvotes);
  const [downvoteCount, setDownvoteCount] = useState(downvotes);

  const handleUpvote = () => setUpvoteCount((prev) => prev + 1);
  const handleDownvote = () => setDownvoteCount((prev) => prev + 1);

  return (
    <div>
      <h1>{title}</h1>
      <p>{views} Views | Uploaded {timestamp}</p>
      <button onClick={handleUpvote}>👍 {upvoteCount}</button>
      <button onClick={handleDownvote}>👎 {downvoteCount}</button>
      <hr />
    </div>
  );
}

export default VideoDetails;
