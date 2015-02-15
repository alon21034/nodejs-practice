$(function() {

	var host_socket = io();
	var btn = $("#send_btn");

	btn.click(function() {
		var text = "send message to host";
		host_socket.emit('send', {message: text});
	});

	host_socket.on('message', function(data) {
		console.log("chat.js, browser");
    if (data.message) {
      console.log('get messsage: ', data.message);
    } else {
      console.log('Error: ', data);
    }
	});
});