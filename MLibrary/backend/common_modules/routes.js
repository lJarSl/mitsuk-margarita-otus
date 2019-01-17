const db = require('./model'),
      logger = require('./logger'),
      fs = require('fs');

const actions = {

    getAllBooks (req, res) {
        db.getAllBooks()
        .then(function (data) {
            logger.debug('Get all books');
            res.send(data);
        })
        .catch(function(errorText){
            logger.error(errorText);
            res.status(400).send({ error: errorText });
            return;
        });
    }, 

    saveBook (req, res) {
        // checking data
        if(typeof req.body.title !== 'string' || req.body.title.length === 0
        || typeof req.body.author !== 'string'  || req.body.author.length === 0
        || typeof req.body.desctiption !== 'string'  || req.body.desctiption.length === 0
        || typeof req.body.date_writed !== 'string'  || req.body.date_writed.length === 0) {
            let errorText = 'Parameters are expected not all';
            logger.error(errorText);
            res.status(422).send({ error: errorText });
            return;
        }

        let data = {
            title: req.body.title,
            author: req.body.author,
            date_writed: req.body.date_writed,
            desctiption: req.body.desctiption
        }

        db.saveBook(data)
        .then(function (data) {
            logger.debug('book saved');
            logger.debug(data);
            res.send(data);
        })
        .catch(function(errorText){
            logger.error(errorText);
            res.status(400).send({ error: errorText });
            return;
        });
    },

    updateBook (req, res) {
        // checking data
        if(typeof req.params.id !== 'string' || !req.params.id
        || typeof req.body.title !== 'string' || req.body.title.length === 0
        || typeof req.body.author !== 'string'  || req.body.author.length === 0
        || typeof req.body.desctiption !== 'string'  || req.body.desctiption.length === 0
        || typeof req.body.state !== 'number'
        || typeof req.body.date_writed !== 'string'  || req.body.date_writed.length === 0) {
            let errorText = 'Parameters are expected not all';
            logger.error(errorText);
            res.status(422).send({ error: errorText });
            return;
        }

        let data = {
            id: req.params.id,
            title: req.body.title,
            author: req.body.author,
            date_writed: req.body.date_writed,
            desctiption: req.body.desctiption,
            state: req.body.state
        }        

        db.updateBook(data)
        .then(function (data) {
            logger.debug('book updated');
            logger.debug(data);
            res.send(data);
        })
        .catch(function(errorText){
            logger.error(errorText);
            res.status(400).send({ error: errorText });
            return;
        });
    },

    deleteBookById(req, res) {
        console.log(`delete book by id - ${req.params.id}`);
        if(typeof req.params.id !== 'string' || !req.params.id) {
            res.status(422).send({ error: errorText });
            return;
        }
        db.deleteBook(req.params.id)
        .then(function (data) {
            logger.debug('book deleted');
            logger.debug(data);
            actions.getAllBooks(req, res);
        })
        .catch(function(errorText){
            logger.error(errorText);
            res.status(400).send({ error: errorText });
            return;
        });
    },

    getUserByLogin (req, res) {
        db.getAllBooks()
        .then(function (data) {
            logger.debug('Get all books');
            res.send(data);
        })
        .catch(function(errorText){
            logger.error(errorText);
            res.status(400).send({ error: errorText });
            return;
        });
    },

    getBookById (req, res) {
        if(typeof req.params.id !== 'string' || !req.params.id) {
            res.status(422).send({ error: errorText });
            return;
        }
        db.getBookById(req.params.id)
        .then(function (data) {
            logger.debug(`get book by id - ${req.params.id}`);
            logger.debug(data);
            res.send(data);
        })
        .catch(function(errorText){
            logger.error(errorText);
            res.status(400).send({ error: errorText });
            return;
        });
    },

    getTextByBookId (req, res) {
        console.log(`get book's text by id - ${req.params.id}`);
        if(typeof req.params.id !== 'string' || !req.params.id) {
            res.status(422).send({ error: errorText });
            return;
        }
        fs.readFile(`./../backend/files/${req.params.id}.txt`, function(err, data) {
            if (err) {
                console.log(err);
                res.status(404).send({ error: err });
                return;
            }
            if (!data) {
                console.log(err);
                res.status(200).send({ error: 'book file not found' });
                return;
            }
            data = {
                text: data.toString()
            }
            console.log(data);
            res.send(data);
        })
    },

    uploadFile (req, res) {
        console.log(`\n\n`);
        console.log('Uploading file...');
        console.log(req.files);
        if (req.files) {
            let file = req.files.file,
                filename = file.name;
            file.mv(`./../backend/files/${filename}`, function(err) {
                if (err) {
                console.log(err);
                res.status(400).send({ error: err });
                return;
                }
                console.log('Uploading file was success');
                res.send({state: 'ok', text: file.data.toString()});
            });
        }
    },

    checkUser (req, res) {

        let data = {
            secret: "",
            success: false
        }

        res.status(200).send(data);
        //'invalid credential'
    },

    registerUser (req, res, next) {
        // checking data
        if(typeof req.body.login !== 'string' || req.body.login.length === 0
        || typeof req.body.email !== 'string'  || req.body.email.length === 0
        || typeof req.body.password !== 'string'  || req.body.password.length === 0) {
            let errorText = 'Parameters are expected not all';
            logger.error(errorText);
            res.status(422).send({ error: errorText });
            return;
        }

        let userData = {
            login: req.body.login,
            email: req.body.email,
            password: req.body.password
        }
        
        db.saveUser(userData)
        .then(function (data) {
            logger.debug('save user');
            res.send(data);
        })
        .catch(function(errorText){
            logger.error(errorText);
            res.status(400).send({ error: errorText });
            return;
        });
    },

}

function init(app){
    
    /**
     * books api
     */
    app.get('/api/books', actions.getAllBooks);
    app.get('/api/books/:id', actions.getBookById);
    app.get('/api/books/delete/:id', actions.deleteBookById);
    app.get('/api/books/:id/text', actions.getTextByBookId);
    app.post('/api/books', actions.saveBook);
    app.post('/api/books/update/:id', actions.updateBook);
    app.post('/api/books/uploadfile', actions.uploadFile);

    /**
     * users api
     */
    app.post('/api/login', actions.checkUser);
    app.post('/api/registration', actions.registerUser);

    //app.get('/api/users/:login', actions.getUserByLogin);
    //app.post('/api/users', actions.saveUser);
    // app.post('/users/update/:login', actions.saveUser);
    // app.get('/users/delete/:id', actions.deleteUser);
    

    app.get('*', function(req, res){
        console.log('404ing');
        res.status(404).send('Упс... 404! Такой страницы нет =(');
    });

    app.post('*', function(req, res){
        console.log('404ing');
        res.status(404).send('Упс... 404! Такой страницы нет =(');
    });
}

module.exports = {
    initForApp: init
}; 