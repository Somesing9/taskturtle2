var exports = module.exports = {};
 
exports.signup = function(req, res) {
    res.render('signup'); 
};

exports.signin = function(req, res) {
 
    res.render('signin');
 
};

exports.isLoggedIn = function (req,res,next) {
  if ( req.isAuthenticated() ) {
    return next();
  }
  res.redirect('/signin');
};