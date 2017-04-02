import React, { Component } from 'react';

class ProjectItem extends Component {
   // delete function
  deleteProject(id) {
     this.props.onDelete(id);
}


  render() {
    return (
      <div className="Project">
      <img src={this.props.project.cover_img} alt="" />
      <h6> <strong> Title: </strong> {this.props.project.title}  </h6>
      <h6> <strong> Category: </strong> {this.props.project.category} </h6>
      <h6> <strong> Description: </strong> {this.props.project.description} </h6>
      <h6> <strong> Source: </strong> {this.props.project.url} </h6>
      <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
      </div>

    );
  }
}

// Poperty validation
ProjectItem.propTypes = {
  project: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default ProjectItem;
