'use strict'

 // import dependencies
var express    = require('express');
var bodyParser = require('body-parser');
var Project = require('./model/projects')
var mongoose   = require("./db/connection");

 // create instances
var app = express();
var router = express.Router();

var Project = mongoose.model("Project")
 // set port
var port = process.env.API_PORT || 3001;

 // configure the API to use bodyParser and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

 // CORS middleware to prevent errors from Cross Origin Resource Sharing
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  // remove cache
  res.setHeader('Cache-Control', 'no-cache');
   next();

});

 // set route path & initialize API
router.get('/', function(req, res) {
  res.json({ message: 'API initialized'});
});

 // // adding /projects route to /api router
 // router.route('/projects')
 //  // retreive all projects from database
 //  .get((req, res) => {
 //    Project.find((err, projects) => {
 //      if (err)
 //        res.send(err);
 //        res.json(projects)
 //    })
 //  })
 //
 // // post new project
 // app.post((req, res) => {
 //   var project = new Project();
 //   (req.body.category) ? project.category = req.body.category : null;
 //   (req.body.title) ? project.title = req.body.title : null;
 //   (req.body.cover_img) ? project.cover_img = req.body.cover_img : null;
 //   (req.body.description) ? project.description = req.body.description : null;
 //   (req.body.url) ? project.url = req.body.url : null;
 //
 //   project.save((err) => {
 //     if (err)
 //     res.send(err);
 //     res.json({ message: 'Project successfully added!'})
 //   });
 // });
 //
 // // Add route to specific project, and add PUT method to update the project based on the ID
 //  router.route('/projects/:project_id')
 //  .put((req,res) => {
 //    Project.findById(req.params.project_id, function(err,comment) {
 //      if (err)
 //       res.send(err);
 //       // setting new project values, if nothing was changed the field will not be altered
 //       (req.body.category) ? project.category = req.body.category : null;
 //       (req.body.title) ? project.title = req.body.title : null;
 //       (req.body.cover_img) ? project.cover_img = req.body.cover_img : null;
 //       (req.body.description) ? project.description = req.body.description : null;
 //       (req.body.url) ? project.url = req.body.url : null;
 //       // save project
 //       project.save((err) => {
 //         if(err)
 //         res.send(err);
 //         res.json({ message: 'Project has been updated'});
 //       });
 //    });
 //  });
 // delete
 // .delete((req,res) => {
 //   Project.remove({ _id: req.params.project_id}, (err, project) => {
 //     if(err)
 //      res.send(err);
 //      res.json({message: 'Project has been deleted'})
 //   })
 // });

//Use router config when calling /api
 app.use('/api', router);

//starts the server and listens for requests
 app.listen(port, () => {
   console.log(`api running on port ${port}`);
 });
