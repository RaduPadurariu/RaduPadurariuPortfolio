import "./Projects.css";
import IconGithub from "../Icons/github.svg";
import Arrow from "../Icons/arrow.svg"

export const Projects = () => {
    return (
        <div className="projects">
            <div className="projects-header">
                <span className="my">My</span> Projects
            </div>
            <div className="projects-container">

                <a href="/internalProjects/miniapps/index.html" target="_blank" className="projects-myProjects">
                    <div className="projects-image--container">
                        <div className="projects-image--planetary">

                        </div>
                    </div>
                    <div className="projects-title">
                        Mini <span className="project-title--color1">Apps</span>
                    </div>
                    <div className="projects-description">
                        This website contain mini apps created only with Java Script with the knowledge from the Web Development course. They are homeworks and workshops we study at the course and I improved and add something extra to each of them to cover everything I learned about HTML, CSS and Java Script (Control Structures, Dom manipulation, Functions and Scopes, AJAX, OOP, ES 6, BOM, etc.)  
                    </div>
                    <div className="projects-container--githubLink">
                        <img className="icons-project" height={50} src={Arrow} alt="logo" />
                    </div>
                </a>

                <a href="https://aquilascollection.herokuapp.com" target="_blank" rel="noopener noreferrer" className="projects-myProjects">
                    <div className="projects-image--container">
                        <div className="projects-image--simulator">
                            <img className="projects-image--gameSimulator" src="../imgs/cutie.jpg" alt="pic" />
                        </div>
                    </div>
                    <div className="projects-title">
                        Blockchain Cuties <div className="project-title--color4">Tools creator</div>
                    </div>
                    <div className="projects-description">
                        I build this website for the community of a NFT game called Blockchain cuties. I asked the players on Telegram what kind of tools they need to improve the experience in game and I created several of them with Java Script. The website also contains my personal set collection where players can enjoy the look of items. 
                    </div>
                    <div className="projects-container--githubLink">
                        <img className="icons-project" height={50} src={Arrow} alt="logo" />
                    </div>
                </a>

                <a href="https://tavernofheroes.herokuapp.com" target="_blank" rel="noopener noreferrer" className="projects-myProjects">
                    <div className="projects-image--container">
                        <div className="projects-image--proportions">
                            <img className="projects-image--idealMan" src="../imgs/tavern.png" alt="pic" />
                        </div>
                    </div>
                    <div className="projects-title">
                        Tavern of <span className="project-title--color2">Heroes</span>
                    </div>
                    <div className="projects-description">
                        This website is my final project from the React course. Is a mini social network, like a forum where gamers can share their strategies and thoughts. I build it using my React knowledge about Components, Props and state, Router 5, Hooks, but also MERN (Mongo DB, Express, Node JS) and redux (basic).  
                    </div>
                    <div className="projects-container--githubLink">
                        <img className="icons-project" height={50} src={Arrow} alt="logo" />
                    </div>
                </a>

                <a href="https://github.com/RaduPadurariu" target="_blank" rel="noopener noreferrer" className="projects-myProjects">
                    <div className="projects-image--container">
                        <div className="projects-image--proportions">
                            <div className="eyes"></div>
                            <img className="projects-image--idealMan" src="../imgs/idealman.jpg" alt="pic" />
                        </div>
                    </div>
                    <div className="projects-title">
                        Ideal man <span className="project-title--color3">Proportions</span>
                    </div>
                    <div className="projects-description">
                        (in progress... ) This website is an application to monitor your muscle measurements comparing with ideal ones proposed by the ancient greeks, only using your wrist and knee measurements. The project will be made with MERN, Sas and TypeScript and can be found on my Github account.
                    </div>
                    <div className="projects-container--githubLink">
                        <img className="icons-project" height={50} src={IconGithub} alt="logo" />
                    </div>
                </a>

                
            </div>
        </div>
    )
}