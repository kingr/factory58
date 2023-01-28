import {useEffect, useState} from 'react';
import '../css/main.css';
import io from "socket.io-client";


const socket = io("http://localhost:3001");

function App() {
  const [messageReceived, setMessageReceived] = useState("");
  const sendMessage = (e: any) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    socket.emit("send_model", fromData.get("model") ?? "");

    fromData.set("message","")
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data)
    })
  }, [socket])

  return (
    <div className="amdin-dash">
      <form onSubmit={sendMessage}>
        <input name="model" placeholder="Model..." />
        <button>submit</button>
      </form>
      <h1>{messageReceived}</h1>
    </div>
  );
}

export default App;
