import React, { useState } from "react";

function CommentForm({ comments, setComments, handleSubmit }) {
  const [comment, setComment] = useState(""); 

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault(); 

    if (!comment.trim()) {
      return; 
    }
    
    if (typeof setComments === 'function') {
      if (Array.isArray(comments)) {
        setComments([...comments, { id: Date.now(), content: comment }]);
      } else {
        setComments([{ id: Date.now(), content: comment }]);
      }
    }
    setComment("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        placeholder="Add a comment"
        value={comment}
        onChange={handleCommentChange}
      ></input>
      <button type="submit">SEND</button>
    </form>
  );
}

export default CommentForm;
