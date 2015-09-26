var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var myDB = new Schema({
    room_id    : String,
    updated_at : Date
});

mongoose.model( 'Database', myDB );
mongoose.connect( 'mongodb://localhost/express-todo' );