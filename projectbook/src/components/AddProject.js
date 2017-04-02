import React, { Component } from 'react';

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
        title: this.refs.title.value,
        category: this.refs.category.value,
        description: this.refs.description.value,
        source: this.refs.source.value,
        cover_img: this.refs.cover_img.value
      }}, function() {
        console.log(this.state)
      }
    )}
      // console.log(this.refs.title.value);
      e.preventDefault();
}


  render() {
    let categoryOptions = this.props.categories.sort().map(category => {
      return <option key={category} value="category">{category}</option>
    })
    return (
      <div>
          <form onSubmit={this.handleSubmit.bind(this)}>
              <h3> Add Project </h3>
            <div>
              <label> Title </label><br />
              <input type="text" ref="title" />
            </div>
            <div>
              <label> Category </label><br />
              <select ref="category">
              {categoryOptions}
              </select>
            </div>
            <div>
              <label> Description </label><br />
              <input type="text" ref="description" />
            </div>
            <div>
              <label> Link to Source </label><br />
              <input type="text" ref="source" />
            </div>
            <div>
              <label> Cover Image </label><br />
              <input type="text" ref="cover_img" />
            </div>
             <br />
              <input type="submit" value="Submit" />
          </form>
      </div>
    );
  }
}

export default AddProject;
