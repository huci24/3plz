import React from "react";

export default function Mem({
  title,
  upvotes,
  downvotes,
  img,
  onUpvote,
  onDownvote,
}) {
  return (
    <>
      <div className="meme__container">
        <img src={require(`../images/${img}`)} alt={title} />
        <div className="votes">
          <span>Upvotes: {upvotes}</span>
          <span>Downvotes: {downvotes}</span>
        </div>
        <div className="buttons">
          <button className="upvote" onClick={onUpvote}>
            Upvote
          </button>
          <button className="downvote" onClick={onDownvote}>
            Downvote
          </button>
        </div>
      </div>
    </>
  );
}
