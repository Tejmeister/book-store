var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema(
	{
		name: {
			type: String,
			required: 'Kindly enter name of the book'
		},
		author: {
			type: String,
			required: 'Kindly enter author name'
		},
		genre: {
			type : [{
				type: String,
				enum: ['Romance', 'Action', 'Biography']
			}],
			default: ['Action']
		}
	}
);

module.exports = mongoose.model('Books', BookSchema)