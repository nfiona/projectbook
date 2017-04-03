import React, { Component } from 'react';
import Projects from './components/Projects'
import AddProject from './components/AddProject'
import BeSearchContainer from './components/BeSearchContainer'
 // unique id generator
import uuid from 'uuid';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  // set local data
  componentWillMount(){
    this.setState({projects: [
      {
        id: uuid.v4(),
        category: "Web Development",
        title: "UnFilterIt",
        cover_img: "https://s-media-cache-ak0.pinimg.com/564x/35/d3/c4/35d3c46e871bb168527524cfd79acc64.jpg",
        description: "Ruby on Rails App",
        url: "#"

      },
      {
        id: uuid.v4(),
        category: "Photography",
        title: "Meowza",
        cover_img: "https://s-media-cache-ak0.pinimg.com/564x/35/d3/c4/35d3c46e871bb168527524cfd79acc64.jpg",
        description: "Hanging out at Crumbs and Whiskers, DC",
        url: "#"
      }
    ]})
  }
    // push new (added) project to original state.
  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    // reset state
    this.setState({projects: projects})
    }
    // delete a project
    handleDeleteProject(id) {
    let projects = this.state.projects;
    // look through all projects, find all the id, and match it with current id being passed in; then put that id in the index.
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects: projects})
    }

  render() {
    return (
      <div className="App">
        <div className="main-heading">
          <nav>
            <ul>
          <li id="heading"> <a href="#"> <span> :: </span> <span id="main-heading"> ProjectBook </span> <span> :: </span> </a> </li>
          <li id="nav-one"> <a href="#">  Inspirations </a> </li>
          <li id="nav-two"> <a href="#"> Favorites </a> </li>
          </ul>
         </nav>
        </div>
        <br />
        <br />
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <br />
        <Projects onDelete={this.handleDeleteProject.bind(this)} projects={this.state.projects}/>
          <div className="be-search">
            <p>Behance</p>
            <BeSearchContainer />
          </div>
      </div>
    );
  }
}

export default App;
