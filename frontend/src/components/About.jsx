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
            <div className="hero">
                <h1 className="hero-title">About Page</h1>

                <p className="hero-subtitle">This is all about this SITE and how we <u>(I)</u> made it</p>
                <p className="hero-headline">Find out more by contacting us <u>(me)</u> at : <a href="#">My Email</a></p>
            </div>

            <section>
                <h2 className="!text-7xl !italic absolute top-2/5 left-1/7">{about}</h2>
            </section>

            <article>
                <h2 className='!text-8xl !text-purple-900 !text-center'><u>WHAT? WHO? WHY?</u></h2>
            </article>
        </div> 
    );
}
 
export default About;