import React from 'react';
import { Link } from '@reach/router'

export default () => {


    return(
        <span className='container'>
        <div className='StartPage'>
            <h2 className='Get-Started-Title'>Get started right now!</h2>
            <p>I want to start chatting with the name...</p>
            <form>
                <p><input className='Start-Page-Name-Input' type='text' name='name' placeholder='My name...'/></p>
                <button className='Start-Page-Name-Button'><Link className='StartButtonText' to='/chat'>Start chatting</Link></button>
            </form>
        </div>
        </span>
    );
};