import React, { Component } from 'react'
import BeSearch from './BeSearch'
import BeResults from './BeResults'
import {queryBehance} from './BeUtils'


// moved business logic from BeSearch.js to here..
class BeSearchContainer extends Component {
  // initial state with `query` value that corresponds to a search term
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      hasSearched: false,
      projects: [],
      fieldErrors: {}
    }
  }

  validate(query) {
    const errors = {};
    if (!query.value) errors.value = "Please add field"

    return errors;
  }

  // updates `query` value in state whenever a change is made to the input field
   onSearchInput(e) {
     this.setState({
       query: e.target.value,
     })
   }

   handleToggleSearch(e) {
     let hasSearched = !this.state.hasSearched
     this.setState(Object.assign(this.state, {hasSearched, }))
   }

// triggered whenever the user submits the Search form
  onSubmitQuery(e) {
    e.preventDefault()
      let component = this
      queryBehance(this.state.query).done( data => {
        component.setState({
          query: '',
          hasSearched: !component.state.hasSearched,
          projects: data.projects,
      })
    })
      const query = this.state.query
      const fieldErrors = this.validate(query);
      this.setState({ fieldErrors})
    if(Object.keys(fieldErrors).length)  {
      console.log("need value")
      this.setState({query: ''})
      this.clearFields();
    }
  }


  clearFields(){
    this.setState({
      query: '',
      hasSearched: false,
      projects: [],
      fieldErrors: {}
      }
    )
  }

  render() {
    if (this.state.hasSearched){
      return(
        <div>
            <div>
              <button onClick={ e => this.handleToggleSearch(e)} className="btn btn-default" >
                Search Again
              </button>
            </div>
              <div className="be-results">
                <BeResults projects={this.state.projects}/>
              </div>
        </div>
      )
    } else {
      return(
        <BeSearch
          handleSubmitQuery={(e) => this.onSubmitQuery(e)}
          handleSearchInput={(e) => this.onSearchInput(e)}
          query={this.state.query}
        />
      )
    }
  }
}

export default BeSearchContainer;
