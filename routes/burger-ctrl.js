var db = require("../models");
//controller(MVC) routes, CRUD for burger Request methods...

module.exports = function(app) {
	//gets/displays current stored burgers user wants to eat
	app.get("/burgers", function(req,res){
		db.Burger.findAll({})
		.then(function(dbBurger) {
			var hbsObj = {
				Burgers: dbBurger
			}
			res.render('index', hbsObj);
		});
	});
	//post/adds a burger a user wants to eat to display in the upper left quadrant
	app.post("/burgers/create", function(req, res) {

		db.Burger.create({
			burger_name: req.body.burger_name
		}).
		then(function(dbBurger) {
			 res.redirect("/");
		});
	});
	//when a user gets hungry/clicks on "Devour it!", will update/display burger to be entered...
	//into the upper right quadrant of devoured burgers
	app.put("/burgers/:id", function(req, res) {

		// var nowDevoured = {
		// 	devoured: true
		// }

		var burgerID = req.params.id;

		db.Burger.update({devoured: true}, { 
			where: {
	     		 id: burgerID
	    		}
	    	})
			.then(function(dbBurger) {
				// console.log(dbBurger)
				res.redirect("/");
			});
	});

};