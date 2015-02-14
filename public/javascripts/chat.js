$(function() {

	var socket = io();
	console.log(socket);

	var btn = $("#send_btn");

	btn.click(function() {
		var text = "test msg";
		socket.emit('send', {message: text});
	});

	socket.on('message', function(data) {
    if (data.message) {
      console.log('get messsage: ', data.message);
    } else {
      console.log('Error: ', data);
    }
});

});