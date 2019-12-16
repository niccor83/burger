var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.get("/burgers", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burger: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.create(req.body.burger_name, function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers", function (req, res) {
    burger.update(req.body.burgerId, function (result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.redirect(200, "/");
            }
        });
});

// Export routes for server.js to use.
module.exports = router;