const db = require("../models");
const bcrypt = require("bcryptjs");

module.exports = {
  getSavedUsers: function(req, res) {
    db.User.find({}).then(dbUserData => res.json(dbUserData)).catch(err => {
      console.log(err);
      res.json(err);
    });
  },
  saveUser: function(req, res) {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ msg: "Please enter all fields."})
    }

    db.User.findOne({email}).
      then(user => {
        if(user) {
          return res.status(400).json({ msg: "User already exists for that email address."})
        }

      const newUser = new db.User({
        name,
        email,
        password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser.save().then(user => {
            res.json({user: {
              id: user.id,
              name: user.name,
              email: user.email
            }})
          })
        })
      })
    })
    // db.User.create(req.body).then(dbUserData => res.json(dbUserData)).catch(err => {
    //   console.log(err);
    //   res.json(err);
    // });
  }
};

