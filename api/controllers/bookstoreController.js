var mangoose = require('mongoose');

Books = mongoose.model('Books');

exports.list_all_books = function(req, res) {
	Books.find({}, function(err, book){
		if(err)
			res.send(err);
		res.json(book);
	});
};