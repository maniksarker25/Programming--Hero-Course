import React from 'react';
import { useActionData, useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';
import './Friends.css'

const Friends = () => {
    const friends = useLoaderData();
    // console.log(data)
    return (
        <div>
            <h2>These are my friends:{friends.length}</h2>
            <div className='friends'>
                {
                    friends.map(friend=><Friend key={friend.id} friend={friend}></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;