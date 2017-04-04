var mongoose = require("mongoose")

mongoose.connect("mongodb://localhost/projectbook", (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log("MongoDB is Connected!")
  }
})

module.exports = mongoose
