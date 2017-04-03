import React, {Component} from 'react'

class BeResults extends Component{
  render(){
    let projects= this.props.projects.map( (project, index) => {
      return (
        <div key={index}>
          <img
            src={project.covers.original}
            alt={project.name} />
          <p>{project.name}</p>
          <p>{project.field}</p>
          <p>{project.owners.username}</p>
          <p>{project.owners.location}</p>
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
