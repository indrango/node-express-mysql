var mysql = require('mysql');

// set up connection
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'axioo',
  database: 'tutorial'
});

// check connection
connection.connect(function(err) {
  if (err) throw err;

  console.log("Database connected.");
});

exports.getAll = function(req, res) {
  connection.query('SELECT * FROM users', function(err, rows) {
    res.render('users', {users: rows});
    // console.log("Get all");
  });
};
