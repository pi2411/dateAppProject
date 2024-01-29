import React from 'react'
import { IoArrowUndoOutline } from "react-icons/io5";



const ChatHeader = () => {
    return (
        <div className='chat-container-header'>
            <div className="profile">
                <div className="image-container">
                    <img src='' alt='' />
                </div>
                <h3>UserName</h3>
            </div>
            <i className='log-out-icon'>
                <IoArrowUndoOutline />

            </i>
        </div>
    )
}

export default ChatHeader