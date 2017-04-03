import $ from 'jquery'

export function queryBehance (query) {
  var term = query.replace(/\s/, "+"); // replace any white space characters with a "+"
  var url = "http://www.behance.net/v2/projects?client_id=h2dHDemBkO3RtySj6wWwnM1rXzC76TUU&field=" + term;

  return
  $.ajax({
    url: url,
    type: "get",
    data: {projects: {}},
    dataType: "jsonp",
  }).done((response) => {
    console.log(response);
    return response["projects"]
  }).fail(() => {
    console.log("Ajax request fails")
  })
};


    // // Work with the response
    // success: function( response ) {
    //     console.log( response );
    //      return response["projects"] // server response
    // }

  // fetch all projects matching the passed in project field as JSON
  // return $.getJSON(url).then(function(response) {
  //   return response["projects"]
  // });
