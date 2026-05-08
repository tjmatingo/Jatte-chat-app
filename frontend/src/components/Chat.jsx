import { useEffect, useState } from "react";
import api from "./Axios";


const Chat = () => {
    // const [messages, setMessages] = useEffect([]);

    // const GetData = () => {
    //     api.get("message/")
    //         .then((res) => {
    //             setMessage(res.data);
    //         })
    //         .catch((e) => {
    //             console.log("Error", e);
    //         });
    // };
    
    // useEffect(() => {
    //     console.log(message);
    //     GetData();
    // }, []);
    
    const messages = [
        "Hey, are you free later?",
        "The new UI looks amazing.",
        "Don't forget the meeting tomorrow.",
        "Glassmorphism is still elite.",
        ];
    
    return (
    <div className="chat-hero">
        <h1 className="chatroom-name">Chat Room</h1>
        <div class="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-2 w-1/2 h-5/7 text-white">
             <div className="space-y-2 w-full max-w-md flex flex-col">
                {messages.map((message, index) => (
                <div
                    key={index}
                    className="bg-white border border-gray rounded-2xl p-2 text-purple-900 shadow-xl"
                >
                    {message}
                </div>
                ))}
            </div>
        </div>
        
    </div>
);
}
 
export default Chat;