
import { useState } from "react";
import { NavButton } from "./NavButton/NavButton";
import "./Navigation.css";
import React from 'react';

export const Navigation = () => {
    const [active, setActive] = useState(false);
    
    const changeMenuState = (() => {
        setActive(!active) ;
    });

    return (
        <div className="navigation">
            <div className={active ? "navigation-links-active" : "navigation-links-none"}>
                <NavButton onClick={changeMenuState} label="Home" path="/home"/>
                <NavButton onClick={changeMenuState} label="About Me" path="/about-me"/>
                <NavButton onClick={changeMenuState} label="Skills" path="/skills"/>
                <NavButton onClick={changeMenuState} label="Projects" path="/projects"/>
                <NavButton onClick={changeMenuState} label="Contact" path="/contact"/>
            </div>
            <button className="navigation-menuButton" onClick={changeMenuState} >
                <img className="navigation-menuImage" src={`/imgs/menu.jpg`} alt="" />
            </button>
        </div>
    );
}

