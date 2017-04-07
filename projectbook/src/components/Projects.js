import React, { Component } from 'react';
import ProjectItem from './ProjectItem'

class Projects extends Component {
  projectDelete(id) {
    this.props.onProjectDelete(id);
  }
  render() {
    let projectItems;
    if(this.props.projects) {
      projectItems = this.props.projects.map(project => {
        return (
          <ProjectItem
            project={project}
            uniqueID={ project['_id']}
            onProjectDelete={this.props.onProjectDelete}
            onProjectUpdate={this.props.onProjectUpdate}
            key={ project['_id'] }  />
        )
      })
    }
    return (
      <div className="Projects">
        <h5> Your Projects </h5>
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
