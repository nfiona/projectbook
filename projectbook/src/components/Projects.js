import React, { Component } from 'react';
import ProjectItem from './ProjectItem'

class Projects extends Component {
  deleteProject(id) {
    this.props.onDelete(id);
  }
  render() {
    let projectItems;
    if(this.props.projects) {
      projectItems = this.props.projects.map(project => {
        return (
          <ProjectItem project={project} key={ project['_id'] } onDelete={this.deleteProject.bind(this)} />
        )
      })
    }
    return (
      <div className="Projects">
        <h4> Your Projects </h4>
        <div className="projects-wrapper">
        {projectItems}
        </div>
      </div>
    );
  }
}

  // Poperty validation
  Projects.propTypes = {
    projects: React.PropTypes.array,
    onDelete: React.PropTypes.func
  }

export default Projects;
