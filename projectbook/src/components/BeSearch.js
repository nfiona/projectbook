import React, { Component } from 'react'
// import BeResults from './BeResults'



class BeSearch extends Component {

  render() {

    let {handleSearchInput, handleSubmitQuery, query} = this.props
    return (
      <div className="searchBox">
       <form className="form-inline" onSubmit={(e) => handleSubmitQuery(e)}>
          <div className="form-group">
            <h5> <label> Search Inspirations </label> </h5>
              <h6> *Powered by Behance&trade; </h6>
             <input onChange={(e) => handleSearchInput(e)} value={query} type="text" placeholder="Keyword(s)..." /> <br />
             <br />
             <div>
          <button type="submit" className="btn btn-default" onClick={this.toggle}> Search </button>
            </div>
        </div>
       </form>
      </div>
    )
  }
}

export default BeSearch;
