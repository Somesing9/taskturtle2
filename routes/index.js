var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');
var jobController = require('../controllers/jobController');

/* GET home page. */
router.get('/', indexController.index);

// // Get all jobs
// router.get('/jobs', jobController.job_list);

// router.get('/jobs/create');
// router.post('/jobs/create');

// // Get single job details
// router.get('/jobs/:id', jobController.job_detail);

// // Update a job
// router.put('/jobs/:id', jobController.update_job);

// // Delete a job
// router.delete('/jobs/:id', jobController.delete_job_get);


module.exports = router;