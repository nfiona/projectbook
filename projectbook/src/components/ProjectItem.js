import React, { Component } from 'react';

class ProjectItem extends Component {
  constructor(props) {
    super(props);
    this.state= {
      toBeUpdated: false,
      category: '',
      title: '',
      cover_img: '',
      description: '',
      url: ''
    };
  }
  static defaultProps = {
    categories: ["Web Development", "Web Design", "Graphic Design", "Photography", "Fashion", "Illustration", "Film", "Architecture", "Industrial Design", "Interior Design", "Jewelry Design", "MUA", "Product Design", "Programming", "Textile Design", "UI/UX" ]
  }

  updateProject(e) {
    e.preventDefault();
     //brings up the update field when we click on the update link.
    this.setState({ toBeUpdated: !this.state.toBeUpdated });
    console.log("Project Updated")
  }
  handleProjectUpdate(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    //if any of the project values changed, set it. if not, leave null and our PUT request
    //will ignore it.
    let category = (this.state.category) ? this.state.category : null;
    let title = (this.state.title) ? this.state.title : null;
    let cover_img = (this.state.cover_img) ? this.state.cover_img : null;
    let description = (this.state.description) ? this.state.description : null;
    let url = (this.state.url) ? this.state.url : null;
    let project = {category: category, title: title, cover_img: cover_img, description: description, url: url};
    this.props.onProjectUpdate(id, project);
    this.setState({
      toBeUpdated: !this.state.toBeUpdated,
      category: '',
      title: '',
      cover_img: '',
      description: '',
      url: ''
    })
  }
  deleteProject(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    this.props.onProjectDelete(id);
    console.log("Project deleted!")
  }
  handleCategoryChange(e) {
    this.setState({ category: e.target.value });
  }
  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }
  handleCoverImgChange(e) {
    this.setState({ cover_img: e.target.value });
  }
  handleDescriptionChange(e) {
    this.setState({ description: e.target.value });
  }
  handleUrlChange(e) {
    this.setState({ url: e.target.value });
  }

  render() {
    let categoryOptions;
    categoryOptions = this.props.categories.sort().map(category => {
      return <option key={category} value={category}>{category}</option>
    })
    return (
      <div className="Project">
      <a href="#"> <img src={this.props.project.cover_img} alt="" /> </a>
      <h6> <strong> Title: </strong> {this.props.project.title}  </h6>
      <h6> <strong> Category: </strong> {this.props.project.category} </h6>
      <h6> <strong> Description: </strong> {this.props.project.description} </h6>
      <h6> <strong> Source: </strong> {this.props.project.url} </h6>
      <a href="#" onClick={this.deleteProject.bind(this)}>delete</a>
      <a href="#" onClick={this.updateProject.bind(this)}>update</a>
      { (this.state.toBeUpdated)
        ? (<form onSubmit={this.handleProjectUpdate.bind(this)}>
        <div>
          <label id="category"> Category </label><br />
          <select ref="category" placeholder={this.state.category} onChange={this.handleCategoryChange.bind(this)}>
            {categoryOptions}
          </select>
       </div>
            <label id="category"> Title </label><br />
          <input type="text" placeholder="Update title..." value={this.state.title} onChange={this.handleTitleChange.bind(this)} />
            <label id="category"> Cover Image </label><br />
          <input type="text" placeholder="Update cover image..." value={this.state.cover_img} onChange={this.handleCoverImgChange.bind(this)} />
            <label id="category"> Description </label><br />
          <input type="text" placeholder="Update description..." value={this.state.description} onChange={this.handleDescriptionChange.bind(this)} />
            <label id="category"> Source </label><br />
          <input type="text" placeholder="Update source url..." value={this.state.url} onChange={this.handleUrlChange.bind(this)} /> <br />
            <br />
          <button type="submit" className="btn btn-default" value='Update'>Update</button>
        </form>)
        : null}
      </div>
    )
  }
}

// Poperty validation
ProjectItem.propTypes = {
  project: React.PropTypes.object,
  onDelete: React.PropTypes.func
}

export default ProjectItem;
