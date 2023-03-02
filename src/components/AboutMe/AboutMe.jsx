
import "./AboutMe.css";
import IconFacebook from "../Icons/facebook.svg";
import IconLinkedin from "../Icons/linkedin.svg";
import IconGithub from "../Icons/github.svg";
import {useState} from "react";

export const AboutMe = () => {
    let [i, changeIndex] = useState(1);

    
    const nextPicture = (() => {
        i = i + 1;
        changeIndex(i);
        
    });

    const previousPicture = (() => {
        i = i - 1;
        changeIndex(i);
       
    });

    return (
        <div className="aboutMe">

            <div className="aboutMe-header">
                About <span className="my1">Me</span>
            </div>
            <div className="aboutMe-container">
                <div className="aboutMe-description">
                    <div className="aboutMe-description--title">
                        <p> I'm Radu and <span className="aboutMe-description--title-coding">I love Coding</span></p>
                    </div>
                    <div className="aboutMe-description--paragraph">
                        <p>I'm an enthusiastic and detail-oriented junior Front end Developer. I am a person fascinated by technology, future, AI and space. My passion for informatics came from childhood when I decided to go to Informatics School. I like to create all kind of individual projects with React and Java Script. But the most I like to code and develop my skills every day with a team to share experience with others. My goal is to become a full time Front-End Web-Developer because I like to see immediate results of my work.</p>
                    </div>
                
                    <div className="aboutMe-description--downloadResume">
                        <a className= "aboutMe-description--downloadBtn" title="" href="/download/radupadurariuresume.pdf" target="_blank" >
                            Download Resume    
                        </a>
                    </div>
                </div>
               
                <div className="aboutMe-carousel">
                    <div className="aboutMe-carousel--title">
                        Data Engineer memories ... 
                    </div>

                    <div className="aboutMe-carousel--container">
                        <div className="aboutMe-carousel--Btn-container">
                            <button  className="aboutMe-carousel--Btn" disabled={ i <= 1 ? true : false} onClick={previousPicture}>{'Back'}</button>
                        </div>
                        <div className="aboutMe-carousel--pics">
                            <img className="aboutMe-carousel--picture"src={`/imgs/carousel/${i}.jpg`} alt="" />
                        </div>
                        <div className="aboutMe-carousel--Btn-container">
                            <button className="aboutMe-carousel--Btn" disabled={ i >=10 ? true : false} onClick={nextPicture}>{'Next'}</button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="aboutMe-social">
                <a className="icons-container" href="" target="_blank" rel="noopener noreferrer">
                    <img className="icons-social" height={50} src={IconFacebook} alt="logo" />             
                </a>

                <a className="icons-container" href="https://linkedin.com/in/radu-padurariu-13688991" target="_blank" rel="noopener noreferrer">
                    <img className="icons-social" height={50} src={IconLinkedin} alt="logo" />             
                </a>
               
                <a className="icons-container" href="https://github.com/RaduPadurariu" target="_blank" rel="noopener noreferrer" >
                    <img className="icons-social" height={50} src={IconGithub} alt="logo"/>             
                </a>
            </div>
        </div>
    );
}