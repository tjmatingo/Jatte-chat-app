import api from './Axios.jsx'
import { useEffect, useState } from 'react'

const About = () => {
    const [about, setAbout] = useState("");

    const GetData = () => {
        api.get("jatteAbout/")
            .then((res) => {
                setAbout(res.data.about);
            })
            .catch((e) => {
                console.log("Error", e);
            });
    };
    
    useEffect(() => {
        GetData();
    }, []);

    
    return (
        <div className='content'>
            <h1 className='title'>About Page</h1>
            <p>{about}</p>
        </div>
            
    );
}
 
export default About;