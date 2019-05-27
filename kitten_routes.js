const express = require('express');
const router = express.Router();
const Kitten = require('./kitten_model');
router.get('/', function (req, res, next) {
    Kitten.find({}, (err, doc) => {
        if (err) {
            res.json({
                status: '500',
                msg: err.message
            })
        } else {
            res.json({
                status: '200',
                msg: 'Success',
                result: {
                    count: doc.length,
                    list: doc
                }
            })
        }
    })
});

module.exports = router;