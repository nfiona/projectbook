import React, { Component } from 'react'


class BeSearch extends Component {
  render() {
    let {handleSearchInput, handleSubmitQuery, query} = this.props
    return (
      <div className="searchBox">
       <form className="form-inline" onSubmit={(e) => handleSubmitQuery(e)}>
          <div className="form-group">
            <label> Search on Behance </label> <br />
             <input onChange={(e) => handleSearchInput(e)} value={query} type="text" placeholder="Keyword(s)..." /> <br />
            <button type="submit" className="btn btn-default"> Search </button>
          </div>
       </form>
      </div>
    )
  }
}

export default BeSearch;
