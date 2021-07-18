import { createStore } from "redux";
import { ChatReducer } from "./Chat/ChatReducer";

export const store = createStore(ChatReducer);
