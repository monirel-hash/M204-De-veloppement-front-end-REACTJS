import React from "react";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

function Comments(props) {
  const { comments, setComments, handleSubmit, handleVote } = props;

  return (
    <div id="comments">
      {Array.isArray(comments) &&
        comments.map((comment) => (
          <Comment
            key={comment.id}
            id={comment.id}
            content={comment.content}
            createdAt={comment.createdAt}
            score={comment.score}
            user={comment.user}
            handleVote={handleVote}
          />
        ))}
      <CommentForm
        comments={comments}
        setComments={setComments}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default Comments;
