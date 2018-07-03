const abiDecoder = require('abi-decoder');

var express = require('express');
var router = express.Router();
var db = require('monk')('localhost:27017/mydb')
var userData = db.get('funds')
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('homepage', { title: 'Welcome' });
});
router.get('/deploy', function(req, res, next) {
    res.render('deploy', { title: 'Start Your Own', success: false });
});
router.post('/submit', function(req, res, next) {
    var item = {
        title: req.body.title,
        content: req.body.content,
        poster: req.body.poster,
        address: req.body.address,
        display: true,
    };
    userData.insert(item);
    res.render('deploy', { title: 'Start Your Own', success: true });
});
router.get('/List_fundraiser', function(req, res, next) {
    userData.find({}).then((docs) => {
        res.render('List_fundraiser', { title: 'Fundraisers', item: docs });
    });
});
router.get('/&:id', function(req, res, next) {
    userData.findOne({ _id: req.params.id }).then((docs) => {
        res.render('Fundraiser', { title: 'Fundraiser', item: docs });
    });
});
router.get('/manage-:id', function(req, res, next) {
    userData.findOne({ _id: req.params.id }).then((docs) => {
        res.render('manage-fundraiser', { title: 'Fundraiser', item: docs });
    });
});
router.get('/delete-:id', function(req, res, next) {
    userData.update({ _id: req.params.id }, { $set: { "display": false } }).then((docs) => {
        res.render('manageList', { title: 'Manage Fundraisers', item: docs });
    });
});

router.get('/address-:address', function(req, res, next) {
    res.render('fundaudit', { ttitle: 'Fundraiser', address: req.params.address });
});


// router.get('/address-:address', function(req, res, next) {
//     userData.findOne({ address: req.params.address }).then((docs) => {
//         res.render('Fundraiser', { title: 'Fundraiser', item: docs });
//     });
// });
router.get('/manageList', function(req, res, next) {
    userData.find({}).then((docs) => {
        res.render('manageList', { title: 'Manage Fundraisers', item: docs });
    });
});
router.get('/admin', function(req, res, next) {
    userData.find({}).then((docs) => {
        res.render('admin', { title: 'Admin page', item: docs });
    });
});
router.get('/audit', function(req, res, next) {
    userData.find({}).then((docs) => {
        res.render('audit', { title: 'Coin and Audit', item: docs });
    });
});
router.get('/test', function(req, res, next) {
    res.render('test', { title: 'Welcome' });
});


module.exports = router;