import React from 'react'

function Projects() {
    return (
        <div className="projectsPage">
            <h1>PROJECTS</h1>
            <div className="project4">
                <img className="dishd" src="../images/dishd.png" alt="Project"/>
                <div className="p4details">
                    <h3>d i s h d</h3>
                    <h5>Express | Node | Sequelize | Postgres | React | HTML | CSS | React-Bootstrap | Cloudinary</h5>
                    <p>A full-stack photo sharing social media app to bring people and food together. Users can post, share, search favorite dishes while learning where to find it.</p>
                    <a className="projectLink" target="_blank" rel="noopener noreferrer" href="https://github.com/jmcho311/dishd-pern-frontend">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
            <div className="project3">
                <div className="p3details">
                    <h3>Brewser</h3>
                    <h5>Express | Node | Sequelize | Postgres | React | HTML | CSS | Sass</h5>
                    <p>A full-stack brewery search app developed by a team of three, allows users to find breweries, provides details of brewery, users can rate and review the brewery and/or beer and see other users' reviews.</p>
                    <a className="projectLink" target="_blank" rel="noopener noreferrer" href="https://github.com/jmcho311/brewser-auth-frontend">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
                <img className="brewser" src="../images/Brewser.png" alt="Project"/>
            </div>
            <div className="project2">
                <img className="whenInRoam" src="../images/when_in_roam.png" alt="Project"/>
                <div className="p2details">
                    <h3>When In Roam</h3>
                    <h5>Express | Node | Sequelize | Postgres | HTML | CSS | Sass</h5>
                    <p>A full-stack community-driven travel blog app developed by a team of three, where explorers can share their experiences together.</p>
                    <a className="projectLink" target="_blank" rel="noopener noreferrer" href="https://github.com/jmcho311/when-in-roam">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
            <div className="project1">
                <div className="p1details">
                    <h3>All The Places We'll Go</h3>
                    <h5>HTML | CSS | Javascript</h5>
                    <p>This game of concentration is a representation of all the places cohort 921 is from. It was created to hopefully inspire us to one day travel to all the different places and meet in person.</p>
                    <a className="projectLink" target="_blank" rel="noopener noreferrer" href="https://github.com/jmcho311/Memory">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
                <img className="concentration" src="../images/concentration.png" alt="Project"/>
            </div>
        </div>
    )
}

export default Projects
