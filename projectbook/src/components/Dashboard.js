import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import Projects from './Projects'
import AddProject from './AddProject'
import BeSearchContainer from './BeSearchContainer'
import Favorites from './Favorites'
import Modal from './Modal'

import '../App.css';

class Dashboard extends Component {
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
              <li id="nav-two"> <Link to="/favorites"> Favorites </Link> </li>
            </ul>
          </nav>
            <hr></hr>
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

      </div>



    );
  }
}

export default Dashboard;
