import React, { Component } from 'react';


class AddProject extends Component {
  // submit the data of input into state
  constructor() {
    super();
    this.state = { newProject: [] };
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  // set category options
  static defaultProps = {
    categories: ["Web Development", "Web Design", "Graphic Design", "Photography", "Fashion", "Illustration", "Film", "Architecture", "Industrial Design", "Interior Design", "Jewelry Design", "MUA", "Product Design", "Programming", "Textile Design", "UI/UX" ]
  }

  handleSubmit(e) {
    e.preventDefault();
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
        title: this.refs.title.value,
        category: this.refs.category.value,
        description: this.refs.description.value,
        source: this.refs.source.value,
        cover_img: this.refs.cover_img.value
      }}, function() {
          this.props.onProjectSubmit(this.state.newProject);
      },
      console.log(this.state.newProject)
    )}
}


  render() {
    let categoryOptions = this.props.categories.sort().map(category => {
      return <option key={category} value={category}>{category}</option>
    })
    return (
      <div>
          <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
              <h6> <strong> Add Project </strong> </h6><br />
                <div className="form-group">
                    <label> <h6>Title </h6> </label> <br />
                      <input type="text" ref="title"/>
                  </div>
                  <div className="form-group">
                    <label id="category"><h6> Category </h6> </label> <br />
                      <select ref="category" placeholder="Category..">
                        {categoryOptions}
                      </select>
                  </div>
                <div className="form-group">
                  <label><h6> Description </h6></label><br />
                    <input type="text" ref="description" />
                </div>
                <div className="form-group">
                  <label><h6> Link to Source </h6> </label><br />
                    <input type="text" ref="source" />
                </div>
                <div className="form-group">
                  <label><h6> Cover Image </h6></label><br />
                    <input type="text" ref="cover_img" />
                </div>
                <br />
              <button type="submit" className="btn btn-default" value='Post'> Add </button>
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
