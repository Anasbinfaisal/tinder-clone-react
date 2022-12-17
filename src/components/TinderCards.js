
import React, { useEffect, useState } from 'react'
import TinderCard from "react-tinder-card";
import database from '../Firebase';
import "./TinderCards.css"

export default function TinderCards() {

    const [people, setPeople] = useState([
        // {
        //     name: "Anas",
        //     url : "https://i.pinimg.com/736x/3d/d8/3f/3dd83fc6cfce54d3ad2bcc992cd5ed18--nature-landscape-free-photos.jpg"
        // },
        // {
        //     name: "Ali",
        //     url : "https://i.pinimg.com/736x/3d/d8/3f/3dd83fc6cfce54d3ad2bcc992cd5ed18--nature-landscape-free-photos.jpg"
        // }
    ])

    useEffect(() => {

        const unsubscribe = database.collection('people').onSnapshot(snapshot => {
            setPeople(snapshot.docs.map((doc)=> doc.data()))
        })

        return () => {
            unsubscribe();
        }
      
    }, [])
    

  return (
    <div>
        {/* <h1>Tinder Card</h1> */}
        <div className='tinderCards__cardsContainer'>
        {
            people.map((people) => (
                 <TinderCard className="swipe" preventSwipe={['up', 'down']}  key={people.name}> 
                <div className='card' style={{backgroundImage: `url(${people.url})`}}>
                    <h3>{people.name}</h3>
                    </div></TinderCard>
            ))}
</div>
    </div>
  )
}
