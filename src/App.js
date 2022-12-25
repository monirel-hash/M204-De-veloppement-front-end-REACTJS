import React, { useState } from "react";
import "./styles.css";
import Comment from "./components/Comment";
import Comments from "./components/Comments";
import CommentForm from "./components/CommentForm";

export default function App() {
  const [comments, setComments] = useState([
    {
      id: 1,
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: "1 month ago",
      score: 12,
      user: {
        image: "./images/avatars/image-amyrobson.png",
        username: "amyrobson"
      }
    },
    {
      id: 2,
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: "2 weeks ago",
      score: 5,
      user: {
        image: "./images/avatars/image-maxblagun.png",
        username: "maxblagun"
      }
    },
    {
      id: 3,
      content:
        "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
      createdAt: "2 days ago",
      score: 2,
      user: {
        image: "./images/avatars/image-drezoc.png",
        username: "drezoc"
      }
    }
  ]);

  const handleSubmit = (event) => {
    // code for handling form submission
  };

    // code for handling upvotes and downvotes
    
  const handleVote = (voteType, commentId) => {
    // Find the index of the comment with the matching ID
    const commentIndex = comments.findIndex((comment) => comment.id === commentId);
  
    // Check if the comment exists
    if (commentIndex === -1) {
      // If the comment does not exist, return
      return;
    }
  
    // Create a new array with the updated comment
    const updatedComments = [...comments];
    if (voteType === "up") {
      updatedComments[commentIndex].score += 1;
    } else if (voteType === "down") {
      updatedComments[commentIndex].score -= 1;
    }
  
    // Update the state with the new array of comments
    setComments(updatedComments);
  };
  
  return (
    <div className="App">
      <Comments comments={comments} setComments={setComments} handleSubmit={handleSubmit} handleVote={handleVote} />
    </div>
  );
}
