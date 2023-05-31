import React from "react";
import MemList from "../components/MemList";
import { useSelector } from "react-redux";

export default function Hot() {
  const mems = useSelector((state) => state);
  return (
    <MemList
      memes={Object.values(mems).filter(
        (mem) => mem.upvotes - mem.downvotes >= 5
      )}
    />
  );
}
