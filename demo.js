var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("funds").remove({}, function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});

// const db = require('monk')('localhost:27017/mydb')
// const users = db.get('funds')
// users.find({}).then((docs) => {
//     console.log(docs);
// });