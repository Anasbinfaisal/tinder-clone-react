import { Avatar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { IconButton } from "@mui/material";

import "./Chat.css"

function Chat({name, message, timestamp, profilePic}) {
  return (
   <Link to = {`/chat/${name}`}> 
    <div className='chat'>
            <Avatar className='chat__image' src={profilePic} />

        <div className='chat__details'>
            <h2>{name}</h2>
            <p>{message}</p>
            </div>
     
        <p className='chat__timestamp'>
            {timestamp}
            </p>

    </div> 
     </Link> 
   
  )
}

export default Chat