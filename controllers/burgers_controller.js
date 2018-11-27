
var express = require("express");
var burger = require("../models/burger.js");
var router =  express.Router();

// CRUD - R:
router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};

		res.render("index", hbsObject);
	});
});

// CRUD - C:
router.post("/", function(req, res) {
	console.log(req.body.burger_name);
	if(req.body.burger_name !== "") {
		burger.insertOne(req.body.burger_name.trim(), function() {
			res.redirect("/");
		});
	}
});


// CRUD - U:
router.put("/:id", function(req, res) {
	console.log(req.params.id);

	burger.updateOne(req.params.id, function() {
		res.redirect("/");
	});
})

// CRUD - D: If you really hated your burger....

// router.destroy("/:id", function(req, res) {
// 	console.log(req.params.id);

// 	burger.destroy(req.params.id, function() {
// 		res.redirect("/");
// 	});
// })

// Export
module.exports = router;    