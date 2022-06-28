import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router';
export default function Welcome() {

    const [roomName, setRoomName] = useState();
    const [authToken, setAuthToken] = useState();
    const router = useRouter();

    const roomNameHandler = (e) => {
        setRoomName(e.target.value);
    }
    const authTokenHandler = (e) => {
        setAuthToken(e.target.value);
    }

    const joinMeetingHandler = (e) => {
        router.push({ pathname: '/meeting', query: { roomName: roomName, authToken: authToken } });
    }

    return (<>
        <h1>: Welcome :</h1>
        <div>
            <br />
            <input placeholder='Room Name' onChange={roomNameHandler} />
            <input placeholder='Auth Token' onChange={authTokenHandler} />
            <button onClick={joinMeetingHandler}>Join Meeting</button>
        </div>
    </>
    )
}