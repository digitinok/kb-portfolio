import React, { Component }  from "react";
import Card from "../components/Card";
import projects from "../projects.json";
//import "../assets/TravelBuddy.png";

class Projects extends Component {
  // Setting this.state.projects to the projects json array
  state = {
    projects
  };

  removeproject = id => {
    // Filter this.state.projects for projects with an id not equal to the id being removed
    const projects = this.state.projects.filter(project => project.id !== id);
    // Set this.state.projects equal to the new projects array
    this.setState({ projects });
  };

  render() {
  return (
    <div>
      <h2 className="m-5">Projects I have done</h2>
      <div className="Container">
        <div className="row justify-content-center">
          {this.state.projects.map(project => (
            <Card
              removeProject={this.removeproject}
              id={project.id}
              key={project.id}
              name={project.name}
              image={project.image}
              alt={project.alt}
              repository={project.repository}
              link={project.link}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
}
export default Projects;
