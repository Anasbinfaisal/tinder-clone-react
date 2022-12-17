import { Avatar } from '@mui/material';
import { borderTop } from '@mui/system';
import React, { useState } from 'react'
import './ChatScreen.css';


function ChatScreen({name, profilePic}) {

    const [input, setInput] = useState('');

    const [messages, setMessages] = useState([
    {
        name: name,
        message: 'Hey!!!!!!!!',
        image: profilePic,
    },
    {
        name: name,
        message: 'Hey there!!!!!!!!',
        image: profilePic,
    },
    {        
        message: 'Hey!!!!!!!! Apologies',
    },

    ]);


    const handleSubmit = e => {
        
        e.preventDefault();

        setMessages([...messages, { message: input}])
        setInput('');

    }

  return (
    <div>
        <p className='chatScreen__timestamp'>YOU MATCHED WITH ELLEN ON 10/08/20</p>

        {messages.map((message => (
            message.name ? (
                <div className='chatScreen' key={message.message}>
                <div className='chatScreen__image'>
                  <Avatar src={message.image}></Avatar>
                </div>
                <div className='chatScreen__text'>
                {message.message}
                </div>

            </div>
            ) : (
                <div className='chatScreen' key={message.message}>
                <div className= 'chatScreen__MyText'>
                {message.message}
                </div>

            </div>
            )
        )))}
        <div >
            
            <form className='chatScreen__input'>
                <input value={input}  onChange={(e)=> setInput(e.target.value)} className=' chatScreen__inputField ' type='text' placeholder='Type a messsage...'/>
                <button type="submit" onClick={handleSubmit} className='chatScreen__inputButton'>Send</button>
            </form>

        </div>
    </div>
  )
}

export default ChatScreen