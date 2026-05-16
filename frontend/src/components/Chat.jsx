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
             <div className="chat-log space-y-2 w-full max-w-md flex flex-col mb-4">
                {messages.map((message, index) => (
                <div
                    key={index}
                    className="bg-white border border-gray rounded-2xl p-2 text-purple-900 shadow-xl"
                >
                    {message}
                </div>
                ))}
            </div>

            <div className="flex flex-row">
                <input type="text" className=" fixed left-3 bottom-3 w-10/12 rounded-xl bg-gray-100 text-black p-2" name="message" id="chat-text" aria-multiline/>
                <button className="fixed right-6 bottom-12 w-auto h-2 "><img  className="h-10" src="src/assets/send.svg" alt="sendbutton" /></button>
            </div>
        </div>
        
    </div>
);
}
 
export default Chat;