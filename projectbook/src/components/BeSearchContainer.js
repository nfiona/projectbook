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
    }
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
    queryBehance(this.state.query).then( data => {
      component.setState({
        query: '',
        hasSearched: !component.state.hasSearched,
        projects: data,
      })
    })
  }

  render() {
    if (this.state.hasSearched){
      return(
        <div>
        <button onClick={ e => this.handleToggleSearch(e)}>
          Search Again
          </button>
          <BeResults projects={this.state.projects}/>
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
