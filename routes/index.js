var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'alon21034' });
})

router.post('/room/*', function(req, res, next) {
	res.render('room', { 
		title: 'Room!', 
		room_id: req.body.room_id
	});
}).get('/room/*', function(req, res, next) {
	res.render('room', {
		title: 'Room!',
		room_id: req.params['0']
	})
})

module.exports = router;
