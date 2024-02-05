import React from 'react'
import ChatHeader from './ChatHeader'
import ChatDispaly from './ChatDispaly'
import MatchesDisplay from './MatchesDisplay'
const ChatContainer = ({ user }) => {
    return (
        <div className="chat-container">
            <ChatHeader user={user} />
            <div>
                <button className='option'>Matches</button>
                <button className='option'>Chat</button>

            </div>
            <MatchesDisplay />

            <ChatDispaly />
        </div>
    )
}

export default ChatContainer