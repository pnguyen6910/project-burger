//selectAll()
// SELECT `burgers`.`burger_name`, `burgers`.`devoured` FROM `burgers_db`.`burgers`;

//insertOne()
// INSERT INTO `burgers_db`.`burgers` (`burger_name`) VALUES (<{burger_name: }>);

//updateOne()
// UPDATE `burgers_db`.`burgers` SET `id` = <{id: }>, `burger_name` = <{burger_name: }>, `devoured` = <{devoured: 0}> WHERE `id` = <{expr}>;

const connection = require("../config/connection.js")

var orm = {
    selectAll: function(tableName, cb) {
        connection.query('SELECT * FROM ' + tableName + ';', function(err, result) {
            if (err) throw err
            cb(result)
        })
    },
    insertOne: function(tableName, cb) {
        connection.query('INSERT INTO `burgers_db`.`burgers` (`burger_name`) VALUES (<{burger_name: }>);', function(err, result) {
            if (err) throw err
            cb(result)
        })
    },
    updateOne: function(tableName, cb) {
        connection.query('`burgers_db`.`burgers` SET `id` = <{id: }>, `burger_name` = <{burger_name: }>, `devoured` = <{devoured: 0}> WHERE `id` = <{expr}>;', function(err, result) {
            if (err) throw err
            cb(result)
        })
    }
}


module.exports = orm;