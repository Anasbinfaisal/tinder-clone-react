
import React, { useState } from 'react'
import Chat from './Chat';

function Chats() {
   const [chats, setchats] = useState([
    {
        name: 'Anas',
        message: "Arriving in 10!",
        timestamp: "40 seconds ago",
        profilePic: "https://cdn.pixabay.com/photo/2016/02/28/12/55/boy-1226964_960_720.jpg",
    }, 
    {
        name: 'Aslam',
        message: "Arriving in 20mins!",
        timestamp: "20 minuntes ago",
        profilePic: "https://cdn.pixabay.com/photo/2016/08/17/21/12/portrait-1601516_960_720.jpg",
    }, 
    {
        name: 'Aman',
        message: "Heyy 👍!",
        timestamp: "2 minute ago",
        profilePic: "https://media.istockphoto.com/id/1130696776/photo/happy-cute-little-youtuber-vlogger-waving-hand-looking-at-camera.jpg?s=612x612&w=is&k=20&c=0CjY-cjkbt0i6Dg8cYeySzUgOXXp7B0QVLoLG0jraTU=",
    }, 
   ]);


  return (
    <div> 
       { chats.map( (chat) => (
            <Chat key={chat.name} name = {chat.name} message= {chat.message} timestamp={chat.timestamp} profilePic={chat.profilePic}/>
            
            ))}

        </div>
  );
}

export default Chats    