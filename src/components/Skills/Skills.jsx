import IconHtml from "../Icons/html.svg"
import IconCss from "../Icons/css.svg"
import IconJs from "../Icons/javascript.svg"
import IconReact from "../Icons/react.svg"
import React from 'react';

import "./Skills.css"

export const Skills = () => {
    return (
        <div className="skills">
            <div className="skills-header">
                <span className="my">My</span> Knowledge
            </div>
            <div className="skills-container">
                <div className="skills-data">
                    <div className="skills-data--names">
                        html
                    </div>
                    <div className="skills-data--names">
                        css
                    </div>
                    <div className="skills-data--names">
                        java script
                    </div>
                    <div className="skills-data--names">
                        react
                    </div>
                    <div className="skills-data--names">
                        git
                    </div>
                    <div className="skills-data--names">
                        sass
                    </div>
                </div>
                <div className="skills-bars">
                    <div className="skills-bar--progress">
                        <div className="skills-bar--html"></div>
                        90%
                    </div>
                    <div className="skills-bar--progress">
                        <div className="skills-bar--css"></div>
                        75%
                    </div>
                    <div className="skills-bar--progress">
                        <div className="skills-bar--js"></div>
                        75%
                    </div>
                    <div className="skills-bar--progress">
                        <div className="skills-bar--react"></div>
                        50%
                    </div>
                    <div className="skills-bar--progress">
                        <div className="skills-bar--github"></div>
                        35%
                    </div>
                    <div className="skills-bar--progress">
                        <div className="skills-bar--sass"></div>
                        25%
                    </div>
                </div>
            </div>
            <div className="skills-languages">
                <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noopener noreferrer">
                    <img className="icons" height={50} src={IconHtml} alt="logo" />             
                </a>

                <a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer">
                    <img className="icons" height={50} src={IconCss} alt="logo" />             
                </a>
               
                <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                    <img className="icons" height={50} src={IconJs} alt="logo" />             
                </a>

                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                    <img className="icons" height={50} src={IconReact} alt="logo" />           
                </a>
            </div>
        </div>
    )
}