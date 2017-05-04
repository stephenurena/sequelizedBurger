var db = require("../models");

module.exports = function(app) {

	app.get("/burgers", function(req,res){
		db.Burger.findAll({})
		.then(function(dbBurger) {
			var hbsObj = {
				Burgers: dbBurger
			}
			res.render('index', hbsObj);
		});
	});

	app.post("/burgers/create", function(req, res) {

		db.Burger.create({
			burger_name: req.body.burger_name
		}).
		then(function(dbBurger) {
			 res.redirect("/");
		});
	});

	app.put("/burgers/:id", function(req, res) {

		var burgerID = req.params.id;

		db.Burger.update(
			{
			devoured: true
			}, { 
			where: {
	     		 id: burgerID
	    		}
	    	})
			.then(function(dbBurger) {
				res.redirect("/");
			});
	});

};