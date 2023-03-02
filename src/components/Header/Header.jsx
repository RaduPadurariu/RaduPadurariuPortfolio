import { Logo } from "../Logo/Logo";
import { Navigation } from "../Navigation/Navigation";
import "./Header.css"

export const Header = () => {
    return (
        <div className="header">
            <Logo path="/home"/>
            <Navigation/>    
        </div>
    );
}