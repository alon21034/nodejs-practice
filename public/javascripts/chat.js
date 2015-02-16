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

	// private message
	host_socket.on(id, function(data) {
		console.log('get private message', data);
	});
});