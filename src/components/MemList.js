import React from "react";
import Mem from "./Mem";
import { useDispatch } from "react-redux";
import Header from "./Header";

export default function MemList({ memes }) {
  const dispatch = useDispatch();

  const handleUpvote = (id) => {
    dispatch({ type: "UPVOTE_MEM", payload: id });
  };

  const handleDownvote = (id) => {
    dispatch({ type: "DOWNVOTE_MEM", payload: id });
  };

  console.log(Object.values(memes));

  return (
    <>
      <Header />
      <div className="memes__container">
        {Object.values(memes).map((mem) => {
          return (
            mem.title && (
              <Mem
                key={mem.id}
                title={mem.title}
                upvotes={mem.upvotes}
                downvotes={mem.downvotes}
                img={mem.img}
                onUpvote={() => handleUpvote(mem.id)}
                onDownvote={() => handleDownvote(mem.id)}
              />
            )
          );
        })}
      </div>
    </>
  );
}
