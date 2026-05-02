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
            <h1 className="title">Home Page</h1>
            
            <h3>{message}</h3>
        </div>
    );
}
 
export default Home;