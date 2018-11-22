/* var passport = require('passport');
var Strategy = require('passport-local').Strategy;
// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.
passport.use(new Strategy(
    function(username, password, cb) {
      db.users.findByUsername(username, function(err, user) {
        if (err) { return cb(err); }
        if (!user) { return cb(null, false); }
        if (user.password != password) { return cb(null, false); }
        return cb(null, user);
      });
    }));
  
    passport.serializeUser(function(user, cb) {
        cb(null, user.id);
      });
      
      passport.deserializeUser(function(id, cb) {
        db.users.findById(id, function (err, user) {
          if (err) { return cb(err); }
          cb(null, user);
        });
      });


      /**
       * app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });
 */

 // need to define autenticated middleware
 
 const passport = require('passport')
 const LocalStrategy = require('passport-local').Strategy
 passport.use(new LocalStrategy({
         usernameField: 'email',
         passwordField: 'password'
     }, 
     function (email, password, cb) {
       console.log(email)
         //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
    /*      return UserModel.findOne({email, password})
            .then(user => {
                if (!user) {
                    return cb(null, false, {message: 'Incorrect email or password.'});
                }
                return cb(null, user, {message: 'Logged In Successfully'});
           })
           .catch(err => cb(err));
           */
          return cb(null, {"user":'blah'}, {message: 'Logged In Successfully'})
     } 

 ));


