import React, { Component } from 'react';
import axios from 'axios';
import Projects from './components/Projects'
import AddProject from './components/AddProject'
import BeSearchContainer from './components/BeSearchContainer'
// import DATA from '../data'

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { projects: [] };
    // this.loadProjectsFromServer = this.loadProjectsFromServer.bind(this);
    // this.handleProjectSubmit = this.handleProjectSubmit.bind(this);
    // this.handleProjectDelete = this.handleProjectDelete.bind(this);
    // this.handleProjectUpdate = this.handleProjectUpdate.bind(this);
  }

  loadProjectsFromServer() {
    axios.get(this.props.url).then(res => {
      this.setState({ projects: res.data});
    })
  }
  handleProjectSubmit(project) {
    // let projects = this.state.projects;
    // project.id = Date.now();
    // let newProject = this.state.projects.concat([project]);
    // this.setState( { projects: newProject});
    axios.post(this.props.url, project)
    .then(res => {
      // this.setState({ projects: res.data });
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
    // setInterval(this.loadProjectsFromServer, this.props.pollInterval);
  }

  // set local data
  // componentWillMount(){
  //   this.setState({projects: [
  //     {
  //       id: uuid.v4(),
  //       category: "Web Development",
  //       title: "UnFilterIt",
  //       cover_img: "https://s-media-cache-ak0.pinimg.com/564x/35/d3/c4/35d3c46e871bb168527524cfd79acc64.jpg",
  //       description: "Ruby on Rails App",
  //       url: "#"
  //     },
  //     {
  //       id: uuid.v4(),
  //       category: "Web Development",
  //       title: "Test1",
  //       cover_img: "https://s-media-cache-ak0.pinimg.com/564x/35/d3/c4/35d3c46e871bb168527524cfd79acc64.jpg",
  //       description: "Ruby on Rails App",
  //       url: "#"
  //     },
  //     {
  //       id: uuid.v4(),
  //       category: "Web Development",
  //       title: "Test2",
  //       cover_img: "https://s-media-cache-ak0.pinimg.com/564x/35/d3/c4/35d3c46e871bb168527524cfd79acc64.jpg",
  //       description: "Ruby on Rails App",
  //       url: "#"
  //     },
  //     {
  //       id: uuid.v4(),
  //       category: "Web Development",
  //       title: "Test3",
  //       cover_img: "https://s-media-cache-ak0.pinimg.com/564x/35/d3/c4/35d3c46e871bb168527524cfd79acc64.jpg",
  //       description: "Ruby on Rails App",
  //       url: "#"
  //     },
  //     {
  //       id: uuid.v4(),
  //       category: "Photography",
  //       title: "Meowza",
  //       cover_img: "https://s-media-cache-ak0.pinimg.com/564x/35/d3/c4/35d3c46e871bb168527524cfd79acc64.jpg",
  //       description: "Hanging out at Crumbs and Whiskers, DC",
  //       url: "#"
  //     }
  //   ]})
  // }
    // push new (added) project to original state.
  // handleAddProject(project){
  //   let projects = this.state.projects;
  //   projects.push(project);
  //   // reset state
  //   this.setState({projects: projects})
  //   }
    // delete a project
    // handleDeleteProject(id) {
    // let projects = this.state.projects;
    // // look through all projects, find all the id, and match it with current id being passed in; then put that id in the index.
    // let index = projects.findIndex(x => x.id === id);
    // projects.splice(index, 1);
    // this.setState({projects: projects})
    // }

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
          <AddProject onProjectSubmit={this.handleProjectSubmit.bind(this)} />
            <br />
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

export default App;
