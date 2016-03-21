 var names = require('./../controllers/names.js')

   module.exports = function(app) {
   	app.get('/names', function(req, res) {
      	names.index(req,res)
    });
    app.post('/create', function(req,res){
      	names.create(req,res)
    });
     app.post('/destroy/:id', function(req,res){
     	names.destroy(req,res)
    });

  };