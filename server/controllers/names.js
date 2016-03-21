var mongoose = require('mongoose');
var Name = mongoose.model('Name');


module.exports = (function() {
 return {
 	index: function(req, res) {
     Name.find({}, function(err, results) {
       if(err) {
         console.log(err);
       } else {
         res.json(results);
       }
   	})
  },
  create: function(req, res){
  	console.log(req.body.first + "create lineo one")
  	var name = new Name({first:req.body.first})
  	name.save(function(err,results){
  		if(err){
  			console.log("something went wrong")
  		}
  		else{
  			console.log("successfully add a name!" + name.first)
  			res.json(results)
  		}
  	})
  },
  	destroy: function(req, res){
  	// console.log(req.params.id)
  	Name.remove({_id:req.params.id},function(err,results){
  		if(err){
  			console.log("something went wrong")
  		}
  		else{
  			console.log("successfully add a friend!")
  			res.json(results)
  		}
  		})
  	}
 }
})();