import React, { Component } from 'react';
import uuid from 'uuid';


class AddProject extends Component {
  // submit the data of input into state
  constructor() {
    super();
    this.state = {
      newProject: []
    }
  }
  // set category options
  static defaultProps = {
    categories: ["Web Development", "Web Design", "Graphic Design", "Photography", "Fashion", "Illustration", "Film", "Architecture", "Industrial Design", "Interior Design", "Jewelry Design", "MUA", "Product Design", "Programming", "Textile Design", "UI/UX" ]
  }

  handleSubmit(e) {
    // input validation
    if(this.refs.title.value === ''){
      alert("Please Add Title")
    } else if (this.refs.description.value === '') {
      alert("Description is required")
    } else if (this.refs.cover_img.value === '') {
      alert("Cover Image is required")
    // add validated input to state
    } else {
      this.setState({newProject: {
        id: uuid.v4(),
        title: this.refs.title.value,
        category: this.refs.category.value,
        description: this.refs.description.value,
        source: this.refs.source.value,
        cover_img: this.refs.cover_img.value
      }}, function() {
          this.props.addProject(this.state.newProject);
      }
    )}
      // console.log(this.refs.title.value);
      e.preventDefault();
}


  render() {
    let categoryOptions = this.props.categories.sort().map(category => {
      return <option key={category} value={category}>{category}</option>
    })
    return (
      <div>
          <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
              <h5> <strong> Add Project </strong> </h5>
            <div className="form-group">
              <label> Title </label> <br />
              <input type="text" ref="title"/>
            </div>
            <div className="form-group">
              <label id="category"> Category </label><br />
              <select ref="category" placeholder="Category..">
              {categoryOptions}
              </select>
            </div>
            <div className="form-group">
              <label> Description </label><br />
              <input type="text" ref="description" />
            </div>
            <div className="form-group">
              <label> Link to Source </label><br />
              <input type="text" ref="source" />
            </div>
            <div className="form-group">
              <label> Cover Image </label><br />
              <input type="text" ref="cover_img" />
            </div>
             <br />
              <button type="submit" className="btn btn-default"> Add </button>
          </form>
      </div>
    );
  }
}

// Poperty validation
AddProject.propTypes = {
  categories: React.PropTypes.array,
  addProject: React.PropTypes.func
}

export default AddProject;
