import Typical from 'react-typical'
import { NavLink } from "react-router-dom";
import "./Home.css"

export const Home = () => {
    return (
        <div className="home">
            <div className="container-img">  
                <img src="/imgs/galaxy.jpg" alt="galaxy.jpg" />
            </div> 
            <div className="container-description">
                <p className="heading-paragraph">
                    <Typical className="auto-type" steps={[" ", 1000, "Hello traveler ...", 1500]} loop={1} wrapper="b"/>
                </p>
                <div className="headings">
                    <p className="heading2">Radu</p>
                    <p className="heading2">Padurariu</p>
                    <p className="heading3">Junior Front end developer</p>
                </div>
                <div className="contact-btn-container">
                        <NavLink className= "contact-btn-homepage" to="/contact">
                            Contact             
                        </NavLink>
                    </div>
                
            </div>  
        </div>
    );
}