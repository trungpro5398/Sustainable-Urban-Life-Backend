// Import required packages
var express = require("express");
var cors = require("cors");
var app = express();

// Enable Cross-Origin Resource Sharing (CORS) and JSON parsing
app.use(cors());
app.use(express.json());

// Import MySQL module
var mysql = require("mysql");

// Create a MySQL connection configuration
var con = mysql.createConnection({
  host: "database-rr.c6pu7dbco1tw.ap-southeast-2.rds.amazonaws.com",
  port: 3306,
  user: "admin",
  password: "Fit5120ta19",
  database: "solar_energy",
});

// Connect to the MySQL database
con.connect(function (err) {
  if (err) throw err;
  console.log("Connected to MySQL database!");
});

// Route to get data from 'solar_package_wb' table
app.get("/api/solar_energy/solar_package_wb", function (req, res, next) {
  con.query("SELECT * FROM solar_package_wb", function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});

// Route to get data from 'solar_package_wob' table
app.get("/api/solar_energy/solar_package_wob", function (req, res, next) {
  con.query("SELECT * FROM solar_package_wob", function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});

// Route to get data from 'sub_info' table
app.get("/api/solar_energy/sub_info", function (req, res, next) {
  con.query("SELECT * FROM sub_info", function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});

// Route to get data from 'angel_and_oeratation' table
app.get("/api/solar_energy/angel_and_oeratation", function (req, res, next) {
  con.query(
    "SELECT * FROM angel_and_oeratation",
    function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    }
  );
});
// Route to get data from 'solar_package' table
app.get("/api/solar_energy/solar_package", function (req, res, next) {
  con.query("SELECT * FROM solar_package", function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});

// Route to get data from 'user_selection' table
app.get("/api/solar_energy/user_selection", function (req, res, next) {
  con.query("SELECT * FROM user_selection", function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});
// Route to get data from 'battery_cost' table
app.get("/api/solar_energy/battery_cost", function (req, res, next) {
  con.query("SELECT * FROM battery_cost", function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});

// Route to get data from 'yearly_market_value' table
app.get("/api/solar_energy/yaerly_market_valuation", function (req, res, next) {
  con.query(
    "SELECT * FROM yaerly_market_valuation",
    function (err, result, fields) {
      if (err) throw err;
      res.json(result);
    }
  );
});
// Route to get data from 'Zone_rating' table
app.get("/api/solar_energy/Zone_rating", function (req, res, next) {
  con.query("SELECT * FROM Zone_rating", function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});
// Route to get data from 'dewellings' table
app.get("/api/solar_energy/dewellings", function (req, res, next) {
  con.query("SELECT * FROM dewellings", function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});
// Route to get data from 'Tarffic' table
app.get("/api/solar_energy/Tarffic", function (req, res, next) {
  con.query("SELECT * FROM Tarffic", function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});
// Route to get data from 'Tarffic' table
app.get("/api/solar_energy/Top_10", function (req, res, next) {
  con.query("SELECT * FROM Top_10", function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});
// Route to get data from 'composite_keys' table
app.get("/api/solar_energy/composite_keys", function (req, res, next) {
  con.query("SELECT * FROM composite_keys", function (err, result, fields) {
    if (err) throw err;
    res.json(result);
  });
});
// Route to check a password
app.post("/api/check-password", function (req, res, next) {
  const { password } = req.body;

  if (password === "trungpro") {
    res.json({ isValid: true });
  } else {
    res.json({ isValid: false });
  }
});

// Define the port on which the server will listen
const PORT = process.env.PORT || 80;
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});
