import "./Logo.css"
import { NavLink } from "react-router-dom";

export const Logo =(props) => {
    return (
        <NavLink className="logo" to={props.path}>
            <img src="/imgs/logo.jpg" alt="logo" />
        </NavLink>
    );
}