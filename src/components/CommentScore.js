import React from "react";

function CommentScore(props) {
  const { score, handleVote } = props;

  return (
    <div id="comment-score">
      <button onClick={() => handleVote("up")}>Upvote</button>
      <span>{score}</span>
      <button onClick={() => handleVote("down")}>Downvote</button>
    </div>
  );
}

export default CommentScore;
