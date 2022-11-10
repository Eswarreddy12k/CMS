const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cms', {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
    if(err)
        console.log('Error connecting to database', err);
    else
        console.log('Connected to database');
});

module.exports = mongoose;