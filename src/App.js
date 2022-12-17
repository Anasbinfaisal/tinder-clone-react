import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TinderCards from './components/TinderCards';
import SwipeButtons from './components/SwipeButtons';
import Chats from './components/Chats';
import ChatScreen from './components/ChatScreen';

function App() {
  return (

    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element = { 
        <div>
          <Header/>
          <TinderCards/>
          <SwipeButtons />
        </div>
      }/>

        <Route path='/chat' element = {         
       <div> <Header backbutton='/'/> <Chats/> </div>
        } />
          
        <Route path='/chat/:person' element = { <div>
          <Header backbutton='/chat'/>
          <ChatScreen/>
        </div>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
