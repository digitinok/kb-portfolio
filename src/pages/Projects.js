import React, { Component }  from "react";
import Card from "../components/Card";
import projects from "../projects.json";

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
      <h1>Amazing Projects</h1>
      <h2>All the stuff I've done?</h2>
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
  );
}
}
export default Projects;
