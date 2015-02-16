$(function() {

	var host_socket = io();
	var btn = $("#send_btn");
  var id = window.location.pathname.split('/')[2];

	console.log("start room socket!");
	
	btn.click(function() {
		var text = "send message to host";
		host_socket.emit('send', {message: text});
	});

	// broadcast message
	host_socket.on('broadcast', function(data) {
		console.log('get broadcast message', data);
	});


	// Canvas

	var x_now = 300;
	var y_now = 200;

	var myRectangle = {
    x: x_now,
    y: y_now,
    width: 50,
    height: 50,
    borderWidth: 3
  };

	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");

	var d = new Date();
	var time_now = d.getTime();
	var time_prev = d.getTime();
	var time_arrive = d.getTime();

	drawRectangle(myRectangle, ctx);

	function drawRectangle(myRectangle, context) {
    context.beginPath();
    context.rect(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = myRectangle.borderWidth;
    context.strokeStyle = 'black';
    context.stroke();
  }

  function animate(myRectangle, canvas, context) {

  	myRectangle.x += (myRectangle.x != x_now)?(myRectangle.x > x_now)?-1:1:0;
  	myRectangle.y += (myRectangle.y != y_now)?(myRectangle.y > y_now)?-1:1:0;

    // clear
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawRectangle(myRectangle, context);
  }

  // animation
  setInterval(function() {
  	animate(myRectangle, canvas, ctx);
  }, 100);

  // private message
  // update new_x, new_y, arrived_time
	host_socket.on(id, function(data) {
		d = new Date();
		time_now = d.getTime();

		var diff = (time_now - time_prev);
		time_prev = time_now;

		x_now += Math.round(diff * diff * data['x'] / 2 / 1000000);
		y_now += Math.round(diff * diff * data['y'] / 2 / 1000000);

		console.log('get private message', diff, data);

	});
});