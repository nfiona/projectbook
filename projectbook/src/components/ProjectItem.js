import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    return (
      <div className="Project">
      <img src={this.props.project.cover_img} alt="" />
      <p> <strong> Title: </strong> {this.props.project.title}  </p>
      <p> <strong> Category: </strong> {this.props.project.category} </p>
      <p> <strong> Description: </strong> {this.props.project.description} </p>
      <p> <strong> Source: </strong> {this.props.project.url} </p>

      </div>
    );
  }
}

export default ProjectItem;
