let seedData = require("./seedData.json")
let mongoose = require("./connection.js")
let Project = require("../model/projects.js")

var Project = mongoose.model("Project")


Project.remove({}).then( () => {
  Project.collection.insert(seedData).then( () => {
    process.exit()
  }
)
})


// Project.remove({}, () => {
//   Project.create(seedData, () => {
//     process.exit()
//   })
// })
