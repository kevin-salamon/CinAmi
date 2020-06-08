const db = require("../models");

module.exports = {
  getSavedUsers: function(req, res) {
    db.User.find({}).then(dbUserData => res.json(dbUserData)).catch(err => {
      console.log(err);
      res.json(err);
    });
  },
  saveUser: function(req, res) {
    db.User.create(req.body).then(dbUserData => res.json(dbUserData)).catch(err => {
      console.log(err);
      res.json(err);
    });
  },
  removeUser: function(req, res) {
    db.User.remove({
      _id: req.params.id
    }).then(dbUserData => res.json(dbUserData)).catch(err => {
      console.log(err);
      res.json(err);
    });
  },
  updateUser: function(req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(dbUserData => res.json(dbUserData)).catch(err => {
      console.log(err);
      res.json(err);
    });
  }
};

