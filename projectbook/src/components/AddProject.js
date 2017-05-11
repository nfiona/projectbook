import React, { Component } from 'react';


class AddProject extends Component {
  // submit the data of input into state
  constructor() {
    super();
    this.state = { newProject: [], fields: {} || '', fieldErrors: {} };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this)
  }
  // set category options
  static defaultProps = {
    categories: ["Web Development", "Web Design", "Graphic Design", "Photography", "Fashion", "Illustration", "Film", "Architecture", "Industrial Design", "Interior Design", "Jewelry Design", "MUA", "Product Design", "Programming", "Textile Design", "UI/UX" ]
  }

  //we'll use this for validation instead of putting all of that in handleSubmit
    validate(project) {
      const errors = {};
      if (!project.title) errors.title = 'Please Add Title';
      if (!project.description) errors.description = 'Description is required';
      if (!project.cover_img) errors.cover_img = 'Cover Image is required';
      //we return this object for fieldErrors
      return errors;
    }

    handleSubmit(e) {
      //we're now setting our project object from the onInputChange
      const project = this.state.fields;

      //this will check the validation for you
      const fieldErrors = this.validate(project);
      //now that we have that object we can set it
      this.setState({ fieldErrors });
      e.preventDefault();
      if (Object.keys(fieldErrors).length) return;

      this.props.onProjectSubmit(this.state.newProject)
      this.setState({ newProject: {}, fields:{} })
      this.clearFields();
   }

   clearFields(){
     this.refs.title.value = '';
     this.refs.category.value = '';
     this.refs.description.value = '';
     this.refs.url.value = '';
     this.refs.cover_img.value = '';
   }

   onInputChange(e) {
      const project = this.state.fields;
      project[e.target.name] = e.target.value;
      this.setState({newProject: project})
    }


//   handleSubmit(e) {
//     e.preventDefault();
//     // input validation
//     if(this.refs.title.value === ''){
//       alert("Please Add Title")
//     } else if (this.refs.description.value === '') {
//       alert("Description is required")
//     } else if (this.refs.cover_img.value === '') {
//       alert("Cover Image is required")
//     // add validated input to state
//     } else {
//       this.setState({newProject: {
//         title: this.refs.title.value,
//         category: this.refs.category.value,
//         description: this.refs.description.value,
//         source: this.refs.source.value,
//         cover_img: this.refs.cover_img.value
//       }}, function() {
//           this.props.onProjectSubmit(this.state.newProject);
//       },
//       console.log(this.state.newProject)
//     )}
// }


  render() {
    let categoryOptions = this.props.categories.sort().map(category => {
      return <option
                key={category}
                name="category"
                value={category}>
                {category}
                </option>
    })
    return (
      <div>
          <form className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
              <h6> <strong> Add Project </strong> </h6><br />
                <div className="form-group">
                    <label> <h6>Title </h6> </label> <br />
                      <input
                        type="text"
                        ref="title"
                        name="title"
                        value={this.state.fields.title}
                        onChange={this.onInputChange}
                        />

                        <span style={{ color: 'red' }}>{ this.state.fieldErrors.title }</span>

                  </div>
                  <div className="form-group">
                    <label id="category"><h6> Category </h6> </label> <br />
                      <select
                        name="category"
                        ref="category"
                        placeholder="Category.."
                        value={this.state.category}
                        >
                        <option> </option>
                        {categoryOptions}
                      </select>
                  </div>
                <div className="form-group">
                  <label><h6> Description </h6></label><br />
                    <input
                      type="text"
                      ref="description"
                      name="description"
                      value={this.state.fields.description}
                      onChange={this.onInputChange}
                      />
                      <span style={{ color: 'red' }}>{ this.state.fieldErrors.description }</span>
                </div>
                <div className="form-group">
                  <label><h6> Link to Source </h6> </label><br />
                    <input
                      type="text"
                      name="url"
                      ref="url"
                      value={this.state.fields.url}
                      onChange={this.onInputChange}
                       />
                </div>
                <div className="form-group">
                  <label><h6> Cover Image </h6></label><br />
                    <input
                      type="text"
                      ref="cover_img"
                      name="cover_img"
                      value={this.state.fields.cover_img}
                      onChange={this.onInputChange}
                      />
                      <span style={{ color: 'red' }}>{ this.state.fieldErrors.cover_img }</span>
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
