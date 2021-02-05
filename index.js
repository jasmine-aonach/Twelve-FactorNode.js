const MongoCLient = require('mongodb').MongoClient;

MongoCLient.connect(process.env.MONGO_URI, function (err, db) {
    if (err) {
        console.log('Cannot connect to DB', err);
    } else {
        console.log('Connected');
    }
});