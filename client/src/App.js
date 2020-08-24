import React, { useState, useEffect } from 'react';
import './App.css';
import io from 'socket.io-client';
import { Router } from '@reach/router';
import { Link } from '@reach/router';
import StartPage from '../src/views/StartPage';
import ChatPage from '../src/views/ChatPage';

function App() {
  const [socket] = useState(() => io(':8000'));

  useEffect(() => {
    console.log('Is this running?');
    socket.on('Welcome', data => console.log(data));
 
    return () => socket.disconnect(true);
  }, []);

  return (
    <div className="App">
      <span className='container'><h1 className='main-title'><Link className='MainTitleText' to='/chat/create'>MERN Chat</Link></h1></span>
      <Router>
        <StartPage path='/chat/start' default/>
        <ChatPage path='/chat'/>
      </Router>
    </div>
  );
}

export default App;
