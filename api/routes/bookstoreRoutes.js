module.exports = function(app){
	var booksList = require('../controllers/bookstoreController');

	app.route('/books')
		.get(booksList.list_all_books);
		// .post(booksList.create_book);

	// app.route('/books/:bookId')
	// 	.get(booksList.get_books)
	// 	.put(booksList.update_book)
	// 	.delete(booksList.delete_book);
};