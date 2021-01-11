import React from 'react'

function About() {
    return (
        <div className="aboutPage">
            <h1>About Me</h1>
            <div className="aboutContainer">
                <div className="aboutContent">
                    <h3>jane cho</h3>
                    <h4>[software developer] noun</h4>
                    <p>curious problem solver • critical eye for detail • driven by efficiency • lifelong student • mentor • organized thoughtful planner • lover of minimalist aesthetics • determined hard work ethic • passionate builder</p>
                    <p id="synonyms">Synonyms</p>
                    <p>mother • wife • daughter • sister • friend • dog lover • pastry chef/baker • food lover • world explorer</p>
                </div>
            </div>
            <div className="skillsContainer">
                <h1>TECHNICAL SKILLS</h1>
                <div>
                    <ul className="techIcons">
                        <li><img className="icon" src="../images/htmlLogo.png" alt="logo"/>
                            <br/>
                            <label className="iconLabel">HTML</label>
                        </li>
                        <li><img className="icon" src="../images/cssLogo.jpeg" alt="logo"/>
                            <br/>
                            <label className="iconLabel">CSS</label>
                        </li>
                        <li><img className="icon" src="../images/javascriptLogo.png" alt="logo"/>
                            <br/>
                            <label className="iconLabel">JavaScript</label>
                        </li>
                        <li><img className="icon" src="../images/reactLogo.png" alt="logo"/>
                            <br/>
                            <label className="iconLabel">React</label>
                        </li>
                        <li><img className="icon" src="../images/nodeLogo.png" alt="logo"/>
                            <br/>
                            <label className="iconLabel">Node.js</label>                    
                        </li>
                        <li><img className="icon" src="../images/bootstrapLogo.png" alt="logo"/>
                            <br/>
                            <label className="iconLabel">Bootstrap</label>             
                        </li>
                        <li><img className="icon" src="../images/pythonLogo.png" alt="logo"/>
                            <br/>
                            <label className="iconLabel">Python</label>
                        </li>
                        <li><img className="icon" src="../images/expressLogo.png" alt="logo"/>
                            <br/>
                            <label className="iconLabel">Express</label>
                        </li>
                        <li><img className="psqlIcon" src="../images/postgresLogo.png" alt="logo"/>
                            <br/>
                            <label className="iconLabel">PostgreSQL</label>
                        </li>
                        <li><img className="sequelizeIcon" src="../images/sequelizeLogo.png" alt="logo"/>
                            <br/>
                            <label className="iconLabel">Sequelize</label>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
