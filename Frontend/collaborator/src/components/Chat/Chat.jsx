import React, { useEffect, useState } from 'react'
import "./Chat.css";
import Pusher from "pusher-js";
import axios from "axios";
import "./Chat.css";


function Chat(){

    let locall = JSON.parse(localStorage.getItem("name"));

    const [loading,setLoading] = useState(false);
    const [error ,setError] = useState(false)
    const [inp,setInp] = useState([])
    const [message,setMessage] = useState([]);
    
    const mess = []

    const handleInput = (e)=>{
        const {name , value } = e.target;
        setInp({...inp , [name]: value})
    }

    useEffect(()=>{
        Pusher.logToConsole = true;

        var pusher = new Pusher('c42713675bf25f63fe75', {
        cluster: 'ap2'
        });

        var channel = pusher.subscribe('message');
        channel.bind('send', function(data) {
            mess.push(data)
            setMessage(mess)
        });
    },[])

    function sendMess(){
        setLoading(true)
        axios.post("http://localhost:2334/message",{
            ...inp,
            username : locall
        })
        .then((res)=>{
            console.log("sent");
            setLoading(false)
        })
        .catch(err=>{
            setError(true)
            console.log(err.message)
        })
    }

    return loading ? "...loading" : error ? "...error" : <div className="chat-parentDiv">
        <div className="chat-subDiv">
            {message.map((el)=>{
                
                return <div>
                    <div className="chat-username"><p>{el.username}</p></div>
                    <div className="chat-message"><p>{el.message}</p></div>
                </div>
            })}
        </div>
        <div style={{float:"right"}} className="ChatInput-div">
            <input name="message" onChange={handleInput} type="text" placeholder="Enter message"/>
            <button onClick={sendMess}>Click</button>
        </div>
    </div>
}

export default Chat
