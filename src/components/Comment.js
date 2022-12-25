import React from "react";
import CommentScore from "./CommentScore";

function Comment(props) {
  const { id, content, createdAt, score, user, handleVote } = props;

  return (
    <div id="comment">      
    {user && (
      <>
        <img src={user.image} alt={user.username}></img>
        <span id="username">{user.username}</span>
      </>
    )}
      <span id="createdAt">{createdAt}</span>
      <p id="content">{content}</p>
      <CommentScore score={score} handleVote={handleVote} />
    </div>
  );
}

export default Comment;

