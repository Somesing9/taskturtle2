// var Job = require('../models/job');
var models = require('../models');
var Job = models.Job;
var Bid = models.Bid;

// Display list of all Jobs
exports.job_list = (req, res) => {
  Job.findAll()
    .then( (results) => {
      res.render('jobs/index', {jobs: results});
    }); 
};

// Display details for Jobs
exports.get_job_details = (req, res) => {
  // res.send('NOT IMPLEMENTED: Job detail GET ' + req.params.id);
  Job.findById(req.params.id)
  .then(job => {
    console.log(JSON.stringify(job, null, 2));
    console.log(req.params.id);
    Bid.findAll({
      where: {
        jobId: req.params.id
      }
    })
    .then(bids => {
      console.log('Hell' + bids);
      res.render('jobs/job', {job: job, bids: bids})
    })
  })
};

// Display job create form on GET
exports.create_a_job_get = (req, res) => {
  res.send('NOT IMPLEMENTED: Job create GET');
};


exports.create_a_job_post = (req, res) => {
  Job.create({
      title: req.body.title,
      description: req.body.description
    })
    .then(function() {
      res.redirect('/');
    });
};


// Handle job/delete DELETE
exports.delete_a_job = (req, res) => {
  res.send('NOT IMPLEMENTED: Job delete DELETE' + req.params.id);
};

exports.update_a_job = (req, res) => {
  res.send('NOT IMPLEMENTED: Job update PUT ' + req.params.id);
};

// Bids
exports.create_a_bid = (req, res) => {
  res.send('NOT IMPLEMENTED: Create a bid for job');
}

exports.get_bids_on_job = (req, res) => {
  res.send('NOT IMPLEMENTED: List of all bids on a job');
};

exports.accept_bid = (req, res) => {
  res.send('NOT IMPLEMENTD: Accept a bid for a job');
};
