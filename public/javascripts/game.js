var COL = 8;
var ROW = 32;
var SIZE = 30;

var game = new Phaser.Game(COL*SIZE, ROW*SIZE, 
	Phaser.AUTO, '', { 
		preload: preload, 
		create: create, 
		update: update }
	);

var graphics;

// items
var blocks = new Array();

// input
var cursors;
var spaceButton;

var keyDownCounter;

var step_timer = 0;

function preload() {
	console.log('proload');

	// load images
	game.load.image('red', 'images/red.png');
	game.load.image('blue', 'images/blue.png');
	game.load.image('yellow', 'images/yellow.png');
	game.load.image('white', 'images/white.png');
}

function create() {
	console.log('create');

  cursors = game.input.keyboard.createCursorKeys();
  spaceButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  generate_block_at_top();
}

function update() {
	console.log('update');

	// input
	if (cursors.up.isDown) {
		console.log('down');
	} else if (cursors.down.isDown) {
		console.log('up');
	}

	// drop down
	if (game.time.now >= step_timer) {
		//drop();
	}
}

function Block(color) {
	var w = 0;
	var h = 0;
	var image = game.add.sprite(w*SIZE, h*SIZE, color);
}

function generate_block_at_top() {
	step_timer = game.time.now + 1000;
	
	var block = new Block('red');
	blocks.push(block);
}

function drop() {

}

function move_left() {

}

function move_right() {

}

function rotate() {

}

function drop_directly() {

}

function judge() {

}