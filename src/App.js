
// import React, { Component } from 'react'
// import { io } from 'socket.io-client'
// export default class App extends Component {
//   constructor(){
//     super()
//     this.socket=io("http://localhost:5000/");
//     this.socket.on("MESSAGE",(data)=>{
//       console.log(data)
//     })
//     this.socket.on("sendBroadcastmsg",(data)=>{
//       console.log(data)
//     })
//     this.socket.on("room",(data)=>{
//       console.log(data)
//     })
//     this.socket.on("groupChat",(data)=>{
//       console.log(data)
//     })
//   }
  
//   handleMsg=()=>{
//     this.socket.emit("MESSAGE","client is sending")
//   }
//   handlebroadcast=()=>{
//     this.socket.emit("BROADCAST" ,'broadcast everyon')
//   }
//   JoinRoom=()=>{
//     this.socket.emit("room","Group A")
//   }
//   Chat=()=>{
//     this.socket.emit("groupChat","hello everyone")
//   }
//   render() {
//     return (
//       <div>
//         socket client side
//         <button onClick={this.handleMsg}>send msg</button>
//         <button onClick={this.handlebroadcast}>handle broadcast</button>
//         <button onClick={this.JoinRoom}>Join</button>
//         <button onClick={this.Chat}>Group Chat</button>
//       </div>
//     )
//   }
// }

import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
let socket=io("https://handson5.onrender.com")
export default function App() {
  const [data, setData]=useState({
    msg:"",
    broadcast:'',
    groupName:'',
    exclusiveBroadcast:'',
  })
  
  useEffect(()=>{
    socket.on("MESSAGE",(data)=>{
            console.log(data)
          })
          socket.on("sendBroadcastmsg",(data)=>{
            console.log(data)
          })
          socket.on("room",(data)=>{
            console.log(data)
          })
          socket.on("groupChat",(data)=>{
            console.log(data)
          })
  },[])
   
 const handleMsg=()=>{
    socket.emit("MESSAGE",data.msg)
  }
  const handlebroadcast=()=>{
    socket.emit("BROADCAST" ,data.broadcast)
  }
  const JoinRoom=()=>{
    socket.emit("room",data.groupName)
  }
 const Chat=()=>{
    socket.emit("groupChat",data.exclusiveBroadcast)
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
    <div>
      socket client side
      <br/>
      <input name='msg' value={data.msg} onChange={handleChange}/>
         <button onClick={handleMsg}>send msg</button>
         <br/>
         <input name='broadcast' value={data.broadcast}  onChange={handleChange}/>
         <button onClick={handlebroadcast}>handle broadcast</button>
         <br/>
         <input name='groupName' value={data.groupName}  onChange={handleChange}/>
        <button onClick={JoinRoom}>Join</button>
        <br/>
        <input name='exclusiveBroadcast' value={data.exclusiveBroadcast}  onChange={handleChange}/>
         <button onClick={Chat}>Group Chat</button>
    </div>
  )
}