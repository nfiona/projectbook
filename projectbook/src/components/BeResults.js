import React, {Component} from 'react'

class BeResults extends Component{
  render(){
    let projects= this.props.projects.map((project, index) => {
      return (
        <div className="be-results" key={index}>
          <img
            src={project.covers.original}
            alt={project.name} />
          <p>Title: {project.name}</p>
          <p> Fields: {project.fields[0]}, {project.fields[1]}, {project.fields[2]}</p>
          <p>By: {project.owners[0].display_name}</p>
          <p>From: {project.owners[0].location}</p>
        </div>
      )
    })

    return (
      <div>
        {projects}
      </div>
    )
  }
}


export default BeResults;
