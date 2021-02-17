//selectAll()
// SELECT `burgers`.`burger_name`, `burgers`.`devoured` FROM `burgers_db`.`burgers`;

//insertOne()
// INSERT INTO `burgers_db`.`burgers` (`burger_name`) VALUES (<{burger_name: }>);

//updateOne()
// UPDATE `burgers_db`.`burgers` SET `id` = <{id: }>, `burger_name` = <{burger_name: }>, `devoured` = <{devoured: 0}> WHERE `id` = <{expr}>;

const connection = require("../config/connection.js")

function printQuestionMarks(num) {
    var arr = []

    for (var i = 0; i < num; i++) {
        arr.push("?")
    }
    return arr.toString()
}

var orm = {
    selectAll: function(tableName, cb) {
        connection.query('SELECT * FROM ' + tableName + ';', function(err, result) {
            if (err) throw err
            cb(result)
        })
    },
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO" + table
        queryString += " ("
        queryString += cols.toString()
        queryString += ") "
        queryString += "VALUES ("
        queryString += printQuestionMarks(vals.length)
        queryString += ") "

        console.log(queryString)

        connection.query(queryString, vals, function(err, result) {
            if (err) throw err
            cb(result)
        })
    },
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
        
        console.log(queryString)

        connection.query(queryString, function(err, result) {
            if (err) throw err
            cb(result)
        })
    }
}


module.exports = orm;