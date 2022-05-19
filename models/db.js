const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://robinjake:Raubin7488@cluster0.ll2t4.mongodb.net/EmployeeDB', { useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB Connection Succeeded.') }
    else { console.log('Error in DB connection : ' + err) }
});

require('./employee.model');