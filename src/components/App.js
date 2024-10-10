import React, { useState } from "react";
import video from "../data/video.js";
import VideoDetails from "./VideoDetails";
import CommentSection from "./CommentSection";

  function App() {
    console.log("Here's your data:", video);

    const [showComments, setShowComments] = useState(true);
  
    const toggleComments = () => {
      setShowComments((prev) => !prev);
    };
  
    return (
      <div className="App">
        <iframe
          width="919"
          height="525"
          src={video.embedUrl}
          allowFullScreen
          title={video.title}
        />
        <VideoDetails 
          title={video.title} 
          views={video.views} 
          timestamp={video.createdAt}
          upvotes={video.upvotes}
          downvotes={video.downvotes}
        />
        <button onClick={toggleComments}>
          {showComments ? "Hide Comments" : "Show Comments"}
        </button>
        {showComments && <CommentSection comments={video.comments} />}
      </div>
    );
  }
  
  export default App;
