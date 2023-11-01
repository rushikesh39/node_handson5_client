import "./App.css"
import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

let socket=io("https://handson5.onrender.com")
export default function App() {
  const [messages,setMessages]=useState([])
  const [data, setData]=useState({
    msg:"",
    broadcast:'',
    groupName:'',
    exclusiveBroadcast:'',
  })
  
  useEffect(()=>{
          socket.on("Chat",(data)=>{
            console.log(data)
            setMessages((prevMessages) => [...prevMessages, data]);
          })
          socket.on("JoinSuccess",(data)=>{
            console.log(data)
          })
  },[])
   
  const JoinRoom=()=>{
    socket.emit("room",data.groupName)
  }
 const Chat=()=>{
    socket.emit("groupChat",data.exclusiveBroadcast)
    // setData({
    //   exclusiveBroadcast:""
    // })
  }
 const handleChange=(e)=>{
  // setData{e.target.name:e.target.value}
  // console.log( e.target.value)
  const { name, value } = e.target;
  setData({
    ...data,
    [name]: value
  });
  }

  return (
    <div className="chat-container">
      <div className="chat-header">Group Name:
      <input type="text" name="groupName" value={data.groupName} onChange={handleChange}/>
      <button onClick={JoinRoom}>Enter</button>
      </div>
      <div className="message-list">
        {messages.map((msg, index) => (
          <div key={index} className="message">{msg}</div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Type your message"
          name="exclusiveBroadcast"
          value={data.exclusiveBroadcast}
          onChange={handleChange}
        />
        <button onClick={Chat}>Send</button>
      </div>
    </div>
  )
}
