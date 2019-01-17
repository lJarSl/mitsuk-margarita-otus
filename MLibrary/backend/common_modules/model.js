const User = require('./models/User').User;
const Book = require('./models/Book').Book;


/**
 * new book
 * @param {Promice<object>}  
 */
function saveBook(data){
    let line = new Book(data);
    return line.save();
}

/**
 * update book
 * @param {Promice<object>}  
 */
function updateBook (data) {
    return Book.findOne({_id: data.id}, function (err, book){
        if (err) {
            return false
        }
        if(!book) {
            return false
        }
        book['title'] = data.title;
        book['author'] = data.author;
        book['date_writed'] = data.date_writed;
        book['desctiption'] = data.desctiption;
        book['state'] = data.state;
        return book.save();
      })
}

/**
 * new user
 * @param {*} data 
 */
function saveUser(data){
    let line = new User(data);
    return line.save()
        .then(data => {
            return data
        })
        .catch(err => {
            return err
        });
}

/**
 * get all books
 * @param {Promice<object>}  
 */
function getAllBooks() {
    return Book.find();
}

/**
 * get book by id
 * @param {*} id 
 */
function getBookById(id) {
    return Book.find({_id: id});
}

/**
 * get user by id
 * @param {*} id 
 */
function getUserByLogin(id) {
    return User.find({_id: id});
}

/**
 * delete book
 * @param {Promice<object>}  
 */
function deleteBook(id){
    return Book.remove({_id: id});
}


module.exports = {
    saveBook: saveBook,
    deleteBook: deleteBook,
    updateBook: updateBook,
    saveUser: saveUser,
    getAllBooks: getAllBooks,
    getBookById: getBookById,
    getUserByLogin: getUserByLogin
}; 