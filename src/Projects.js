import React from "react";

function Projects({projects}) {
    return <div>
        <h1>My Projects</h1>
        {projects.map(project => (
            <Project key={project.name} project={project}/>)
        )}
    </div>;
}

function Project({project}) {
    return <div>
        <h2>{project.name}</h2>
        <ul>
            {project.woolNeeded.map(neededColour => (
                <li key={neededColour.colour}>{neededColour.quantity} ball(s) of {neededColour.colour}</li>)
            )}
        </ul>
    </div>;
}

export default Projects;