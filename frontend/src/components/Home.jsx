import api from "./Axios.jsx"
import { useEffect, useState } from "react";

const Home = () => {
    const [message, setMessage] = useState("");

    const GetData = () => {
        api.get("message/")
            .then((res) => {
                setMessage(res.data);
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
                <p className="subheadline">It helps you stay up to date with all your chats</p>


                <div className="block">
  
                </div>
            </section>

            <article className="gradArt">
                <h3 className="title">Top Membership Communities</h3>

                <div className="box">
                    <div className="block-content">
                        <h2>Gym</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, exercitationem alias quis modi explicabo obcaecati sequi corrupti, deleniti non libero commodi, porro quo blanditiis. Error, deleniti? Perferendis cum non similique natus aspernatur placeat aliquam quisquam accusamus? Saepe minus labore a animi dolore. Ipsam, architecto earum?</p>
                    </div>

                    <div className="block-content">
                        <h2>animals</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam commodi ullam quisquam consequatur veniam! Dignissimos illo minus tempora quisquam quidem itaque placeat exercitationem quasi praesentium corrupti, eius debitis ullam doloremque, temporibus iure obcaecati! Placeat pudiandae tenetur similique consectetur! Voluptatibus, exercitationem quos.</p>
                    </div>
                    
                    <div className="block-content">
                        <h2>Skateboarding</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit pariatur iste error non sint perferendis ducimus labore? Sint molestiae laboriosam quos accusamus qui mollitia enim fuga sequi, quidem atque aspernatur, eligendi voluptas optio minima officiis deleniti? Dolore consequuntur laudantium cumque vero adipisci expedita est quia quae, earum eius alias tempore modi ex optio sunt aut doloremque , eius.</p>
                    </div>
                    
                    <div className="block-content">
                        <h2>UGCBrands</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nesciunt excepturi voluptatibus repudiandae cupiditate culpa nobis iure distinctio dolorem cum libero, doloremque, provident neque eum! Repellendus distinctio eligendi neque ullam voluptates tempore. Officia ipsam necessitatibus doloribus id repudiandae magnam aspernatur nam excepturi quam odio! Libero mollitia cumque adipisci nobis eaque recusandae maxime expedita ab ea harum?</p>
                    </div>
                </div>
                
            </article>
        </div>
    );
}
 
export default Home;