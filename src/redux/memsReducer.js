import initialState from "../data/memes";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const memesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPVOTE_MEM":
      return Object.values(state).map((mem) => {
        if (mem.id === action.payload) {
          return {
            ...mem,
            upvotes: mem.upvotes + 1,
          };
        }
        return mem;
      });
    case "DOWNVOTE_MEM":
      return Object.values(state).map((mem) => {
        if (mem.id === action.payload) {
          return {
            ...mem,
            downvotes: mem.downvotes + 1,
          };
        }
        return mem;
      });
    default:
      return state;
  }
};

export default persistReducer(persistConfig, memesReducer);
