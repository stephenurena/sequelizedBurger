
// -----------------------------------------------------------------
// index-routes.js - this file offers a route for rendering hbs page
// -----------------------------------------------------------------

// Route(s)
// =============================================================
module.exports = function(app) {

  // index route loads index.hbs
  app.get("/", function(req, res) {
    res.redirect("/burgers");
  });

};
