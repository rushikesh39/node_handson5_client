// // import React, { useEffect, useState } from 'react';
// // import '../src/App.css';
// // import { io } from 'socket.io-client';

// // let socket = io('http://localhost:5000');

// // export default function App() {
// //   const [data, setData] = useState({
// //     groupName: '',
// //     exclusiveBroadcast: '',
// //   });
// //   const [groupName, setGroupName] = useState('');
// //   const [msg, setMsg] = useState([]);
// //   // const [senderName, setSenderName] = useState(''); // Store the sender's name
 
// //   useEffect(() => {
    
// //       socket.on("room",(data)=>{
// //         console.log(data)
// //       })
// //       socket.on("JoinSuccess",(data)=>{
// //         console.log(data)
       
// //       })
// //       socket.on('groupChat', (data) => {
// //       console.log("all data",data);
// //       setMsg((prevMsg) => [...prevMsg, {message:data}]);
      
// //     });
    
    
    
// //   }, [msg]);
// //   const JoinRoom = () => {
// //     socket.emit('room', {groupName:data.groupName});
// //     setGroupName(data.groupName);
// //   };

// //   const handleChange = (e) => {
// //     setData({ ...data, [e.target.name]: e.target.value });
// //   };

 
// //   const sendMessage = (e) => {
// //     e.preventDefault();
    
// //       socket.emit('groupChat', data.exclusiveBroadcast);
// //       setData((prevData) => ({ ...prevData, exclusiveBroadcast: '' }));
    
// //   };
// // console.log(msg)
// //   return (
// //     <div className='container'>
// //       <h2>Group Chat</h2>
// //       <br />
// //       <input
// //         name='groupName'
// //         value={data.groupName}
// //         placeholder='Join Group Name'
// //         onChange={handleChange}
// //       />
// //       <button onClick={JoinRoom}>Join</button>
    
// //       <br />
// //       <h3>Group: {groupName}</h3>
// //       <div className='chat-container'>
// //         <ul>
// //           {msg.map((item, index) => (
// //             <li key={index}>
// //               {`${item.message}`}
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //       <form onSubmit={sendMessage}>
// //         <input
// //           name='exclusiveBroadcast'
// //           value={data.exclusiveBroadcast}
// //           placeholder='Chat......'
// //           onChange={handleChange}
// //         />
// //         <button type='submit'>Send</button>
// //       </form>
// //     </div>
// //   );
// // }
// import React, { useEffect, useState } from 'react'
// import { io } from 'socket.io-client'
// let socket=io("https://handson5.onrender.com")
// export default function App() {
//   const [data, setData]=useState({
//     msg:"",
//     broadcast:'',
//     groupName:'',
//     exclusiveBroadcast:'',
//   })
  
//   useEffect(()=>{
    
          
//           socket.on("room",(data)=>{
//             console.log(data)
//           })
//           socket.on("groupChat",(data)=>{
//             console.log(data)
//           })
//   },[])
   
//  const handleMsg=()=>{
//     socket.emit("MESSAGE",data.msg)
//   }
//   const handlebroadcast=()=>{
//     socket.emit("BROADCAST" ,data.broadcast)
//   }
//   const JoinRoom=()=>{
//     socket.emit("room",data.groupName)
//   }
//  const Chat=()=>{
//     socket.emit("groupChat",data.exclusiveBroadcast)
//   }
//  const handleChange=(e)=>{
//   // setData{e.target.name:e.target.value}
//   // console.log( e.target.value)
//   const { name, value } = e.target;
//   setData({
//     ...data,
//     [name]: value
//   });
//   }

//   return (
//     <div>
//       socket client side
//       <br/>
      
//          <input name='groupName' value={data.groupName}  onChange={handleChange}/>
//         <button onClick={JoinRoom}>Join</button>
//         <br/>
//         <input name='exclusiveBroadcast' value={data.exclusiveBroadcast}  onChange={handleChange}/>
//          <button onClick={Chat}>Group Chat</button>
//     </div>
//   )
// }

// import "./App.css";
// import React, { Component } from "react";
// import { io } from "socket.io-client";
// export default class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       message: "",
//       broadcastMsg: "",
//       exclusiveBroadcast:"",
//     };

//     this.socket = io("http://localhost:4000");
//     this.socket.on("MSG", (data) => {
//       console.log(data);
//     });
//     this.socket.on("broadcastMSG", (data) => {
//       console.log(data);
//     });
//     this.socket.on('ExclusiveBroadcastMssg', (data) => {
//       console.log('data from broadcasting', data);
//   });
//   }
//   sendMessage = () => {
//     this.socket.emit("message", this.state.message);
//   };
//   sendBroadcast = () => {
    
//     this.socket.emit("clientBroadcastMsg", this.state.broadcastMsg);
//   };
//   sendExclusiveBroadcast = () => {
//     console.log("function call",this.state.exclusiveBroadcast)
//     this.socket.emit('ExclusiveBroadcastMsg', "hello");
//   };

//   handleInputChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
  
//   render() {
//     return (
//       <div className="App">
//         <h1>Socket program</h1>
//         <h2>Chart application</h2>
//         <div className="box">
//           <input
//             type="text"
//             name="message"
//             value={this.state.message}
//             onChange={this.handleInputChange}
//           />
//           <button onClick={this.sendMessage}>send message</button>

//           <input
//             type="text"
//             name="broadcastMsg"
//             value={this.state.broadcastMsg}
//             onChange={this.handleInputChange}
//           />
//           <button onClick={this.sendBroadcast}>Broadcast message</button>

//           <input type="text" name="exclusivemsg" />
//           <button>Exclusive message</button>

//           <input type="text" name="exclusiveBroadcast" value={this.state.exclusiveBroadcast} onChange={this.handleInputChange}/>
//           <button onClick={this.sendExclusiveBroadcast}>ExclusiveBroadcast message</button>
//         </div>
//       </div>
//     );
//   }
// }
