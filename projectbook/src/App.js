import React, { Component } from 'react';
import Projects from './components/Projects'
import AddProject from './components/AddProject'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount(){
    this.setState({projects: [
      {
        category: "Web Development",
        title: "UnFilterIt",
        cover_img: "https://s-media-cache-ak0.pinimg.com/564x/35/d3/c4/35d3c46e871bb168527524cfd79acc64.jpg",
        description: "Ruby on Rails App",
        url: "#"

      },
      {
        category: "Photography",
        title: "Meowza",
        cover_img: "https://s-media-cache-ak0.pinimg.com/564x/35/d3/c4/35d3c46e871bb168527524cfd79acc64.jpg",
        description: "Hanging out at Crumbs and Whiskers, DC",
        url: "#"
      }
    ]})
  }

  render() {
    return (
      <div className="App">
        <div className="main-heading">
          <nav>
            <ul>
          <li id="heading"> <a href=""> ProjectBook </a> </li>
          <li id="nav-one"> <a href="#">  Inspirations </a> </li>
          <li id="nav-two"> <a href="#"> Favorites </a> </li>
          </ul>
         </nav>
        </div>
        <AddProject />
        <br />
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
