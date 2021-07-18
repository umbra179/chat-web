import { useState, useEffect, useContext, Dispatch } from 'react'
import { ReactReduxContext } from 'react-redux'
import { ChatAction } from './Chat/ChatAction';
import { ChatState } from './Chat/ChatReducer';

export function useStore(): [ChatState, Dispatch<ChatAction>] {
    const { store } = useContext(ReactReduxContext);
    const { getState, dispatch, subscribe } = store;
    const [storeState, setStoreState] = useState(getState());

    // subscribe only once
    useEffect(() => {
        const unsubscribe = subscribe(() => setStoreState(getState()));

        return unsubscribe;
    }, []);

    return [storeState, dispatch]
}