import React, { useState, useEffect } from 'react';
import io, { Socket } from 'socket.io-client';

export default () => {
    const [messages, setMessages] = useState([]);
    const [socket] = useState(() => io(':8000'));

    useEffect(() => {
        socket.on('new_messages_from_server', msg => {
            setMessages(prevMessages => {
                return [msg, ...prevMessages];
            });
        });
    });

    return(
        <span className='container'>
            <div className='ChatPage'>

            </div>
        </span>
    );
};