var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'alon21034' });
})

router.get('/create', function(req, res, next) {
	var id = Math.round((Math.random() * 1000000));
	console.log('id:', id);
	res.redirect('/room/'+id);
})

router.get('/join', function(req, res, next) {

})

router.get('/room/:id', function(req, res, next) {
	res.render('room', {
		title: 'Room!',
		room_id: req.params['0']
	})
})

module.exports = router;
