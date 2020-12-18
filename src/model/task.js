module.exports = function () {
  var db = require("../libs/db-connections")();
  var Schema = require("mongoose").Schema;

  var Task = Schema({
    title: String,
    description: String,
    status: Boolean,
  });

  return db.model("task", Task);
};
