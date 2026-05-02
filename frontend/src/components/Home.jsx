import api from "./Axios.jsx"
import { useEffect, useState } from "react";

const Home = () => {
    const [message, setMessage] = useState("");

    const GetData = () => {
        api.get("mainChat/")
            .then((res) => {
                setMessage(res.data.message);
            })
            .catch((e) => {
                console.log("Error", e);
            });
    };
    
    useEffect(() => {
        console.log(message);
        GetData();
    }, []);

    return (
        <div className="content">
            <div className="hero">
                <h1 className="hero-title ">Jatte</h1>
                
                <p className="hero-subtitle">Join a chat room</p>
                <p className="hero-subtitle-r">Start a Private Chat</p>
                
                <p className="hero-headline">"If you want to get exclusive chat features you should become a member of the community and you will get special features"</p>
                
            </div>
            
            <section>
                <h2 className="subtitle">Find out who's online with Online Activity status</h2>
            </section>

            <article>
                <h3>Top Membership Communities</h3>
            </article>
        </div>
    );
}
 
export default Home;