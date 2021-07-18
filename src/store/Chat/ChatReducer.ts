import { IconType } from "react-icons";
import { IoChatbox } from "react-icons/io5";
import { ChatAction } from "./ChatAction";

export interface Tab {
    Icon: IconType
}

export interface ChatState {
    activeTab: Tab
}

const initialState = {
    activeTab: {
        Icon: IoChatbox
    }
};

export const ChatReducer = (
    state: ChatState = initialState,
    action: ChatAction
): ChatState => {
    switch (action.type) {
        case "SET_ACTIVETAB": {
            return { ...state, activeTab: { Icon: action.payload } };
        }
        default:
            return state;
    }
};