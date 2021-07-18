import { useEffect, useState } from 'react';
import { IconType } from 'react-icons';
import { IoSettings, IoChatbox, IoExit } from 'react-icons/io5';
import { Actions, ChatAction } from '../store/Chat/ChatAction';
import { Tab } from '../store/Chat/ChatReducer';
import { useStore } from '../store/useStore';

interface NavbarActions {
    topActions?: Action[],
    bottomActions?: Action[]
};

interface Action {
    Icon: IconType,
    children?: JSX.Element | JSX.Element[]
};

interface IconContainerProps {
    action: Action,
    activeTab: Tab,
    dispatch: React.Dispatch<ChatAction>
}

const IconContainer = ({ action, activeTab, dispatch }: IconContainerProps) => {
    const Icon = action.Icon;
    const children = action.children;
    const isActive = activeTab.Icon.name === Icon.name;
    
    const onClick = (event: React.MouseEvent) => {
        dispatch({type: Actions.SET_ACTIVETAB, payload: Icon});
    }

    return (
        <button className={`nav-action
            flex flex-col justify-center items-center p-5 ${isActive && 'bg-secondaryAccent-light'} rounded-lg m-1.5`}
            onClick={onClick}>
            <Icon size='2em' color={isActive ? '#FC766AFF' : '#FFFFFF'}></Icon>
            {children}
        </button>
    )
}

export function Navbar() {
    const [chatState, dispatch] = useStore()

    const navbarActions: NavbarActions = {
        topActions: [
            { Icon: IoChatbox },
            { Icon: IoSettings }
        ],
        bottomActions: [
            { Icon: IoExit }
        ]
    };

    return (
        <div className='navbar
        bg-secondary-light grid grid-cols-1 grid-row-2 h-full rounded-lg'>
            <div className='navbar-top
            flex flex-col justify-start'>
                {navbarActions.topActions?.map((action: Action, index: number) => <IconContainer key={index} action={action} activeTab={chatState.activeTab} dispatch={dispatch}/>)}
            </div>
            <div className='navbar-bottom
            flex flex-col justify-end'>
                {navbarActions.bottomActions?.map((action: Action, index: number) => <IconContainer key={index} action={action} activeTab={chatState.activeTab} dispatch={dispatch}/>)}
            </div>
        </div>
    );
}