import { NavLink } from "react-router-dom";
import "./NavButton.css"

export const NavButton = (props) => {
    return (
        
            <NavLink onClick={props.onClick}
                className= {(navData) => navData.isActive ? "nav-button--active" : "nav-button" }
                to={props.path}>
                    {props.label}           
            </NavLink>  
    );
}