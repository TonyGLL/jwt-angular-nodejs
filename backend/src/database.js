const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/angular-jwt-db', {

    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Database is Connected'))
.catch(err => console.error(err));