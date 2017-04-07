import React, { Component } from 'react';
import axios from 'axios';
import Projects from './components/Projects'
import AddProject from './components/AddProject'
import BeSearchContainer from './components/BeSearchContainer'
import Modal from './components/Modal'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { projects: [] };
  }

  loadProjectsFromServer() {
    axios.get(this.props.url).then(res => {
      this.setState({ projects: res.data});
    })
  }
  handleProjectSubmit(project) {
    axios.post(this.props.url, project)
    .then(res => {
      this.loadProjectsFromServer()
    }).catch(err => {
      console.error(err);
    });
  }
  handleProjectDelete(id) {
    axios.delete(`${this.props.url}/${id}`).then(res => {
      this.loadProjectsFromServer();
      console.log("Project deleted");
    }).catch(err => {
      console.log(err);
    });
  }
  handleProjectUpdate(id, project) {
    axios.put(`${this.props.url}/${id}`, project).then(res => {
      this.loadProjectsFromServer()
    }).catch(err => {
      console.log(err);
    })
  }
  componentDidMount() {
    this.loadProjectsFromServer();
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
          <hr></hr>
          <br />
          <br />
          <br />
          <br />
            <AddProject onProjectSubmit={this.handleProjectSubmit.bind(this)} />
        </div>
            <div className="main-page">
                <div className="all-projects">
                  <Projects
                    onProjectDelete={this.handleProjectDelete.bind(this)}
                    onProjectUpdate={this.handleProjectUpdate.bind(this)}
                    projects={this.state.projects} />
                </div>
                 <div className="be-searchBox">
                    <BeSearchContainer />
                </div>
            </div>
              <Modal />
      </div>
    );
  }
}

export default App;
