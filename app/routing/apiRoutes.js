var express = require("express");

var router = express.Router();

var friendDB = require('../data/friends.js');



router.get("/api/friends", function (req, res) {

    res.json(friendDB);

});

router.post("/api/friends", function (req, res) {

    var user = req.body.scores;
    var sum = 0;
    var total = new Array();
    for (var i = 0; i < friendDB.length; i++) {
        sum = 0;
        for (var j = 0; j < friendDB[i].scores.length; j++) {
            var u1 = parseInt(user[j]);
            var u2 = parseInt(friendDB[i].scores[j]);
            sum += Math.abs(u1 - u2);

        }
        total[i] = sum;
    }
    var index = 0;
    for (var i = 0; i < friendDB.length - 1; i++) {
        if (total[i] < total[i + 1]) {
            index = i;
        }
    }
    friendDB.push(req.body);
    res.send(friendDB[index]);
});


module.exports = router;