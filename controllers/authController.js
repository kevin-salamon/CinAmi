const db = require("../models");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

module.exports = {

  checkAuthUser: function(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "Please enter all fields."})
    }

    db.User.findOne({email}).
      then(user => {
        if(!user) {
          return res.status(400).json({ msg: "User does not exist."})
        }

        bcrypt.compare(password, user.password)
          .then(isMatch => {
            if (!isMatch) return res.status(400).json({ msg: "Invalid log-in."});

            jwt.sign(
              { id: user.id },
              config.get('jwtSecret'),
              { expiresIn: 3600 },
              (err, token) => {
                if (err) throw err;
                res.json({
                  token,
                  user: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                  }
                });
              }
            )

        })

    })
  },

  getAuthUser: function(req, res) {
    db.User.findById(req.user.id)
      .select('-password')
      .then(user => {
        res.json(user)
      })
  }


};