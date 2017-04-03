import $ from 'jquery'

export function queryBehance (query) {
  var term = query.replace(/\s/, "+"); // replace any white space characters with a "+"
  var url = "http://www.behance.net/v2/projects?client_id=h2dHDemBkO3RtySj6wWwnM1rXzC76TUU&field=" + term;

  // fetch all projects matching the passed in project field as JSON
  return $.getJSON(url).then(function(response) {
    return response["projects"]
  });

  }
