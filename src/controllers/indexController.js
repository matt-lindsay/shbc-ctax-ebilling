var pg = require('pg');

var indexController = function () {
    var getIndex = function (req, res) {
        res.render('index', {
            title: 'Home'
        });
    };
    
    var getAccountInfo = function (req, res) {
        //var query = db.query("SELECT firstname, lastname FROM emps ORDER BY lastname, firstname");
        //query.on("row", function (row, result) {
        //    result.addRow(row);
        //});
        
        //query.on("end", function (result) {
        //    console.log(JSON.stringify(result.rows, null, "    "));
        //    db.end();
        //});
        
    };
    
    var postAccountInfo = function (req, res) {
        // Connect to PostGres.
        // Retrieve Account number and UPRN.
        // Compare with submitted values.
        // Return true / false dependent on match.
        // If match is true write email address back to Postgres.
    };
    
    return {
        getIndex: getIndex,
        getAccountInfo: getAccountInfo,
        postAccountInfo: postAccountInfo
    };
};
module.exports = indexController;