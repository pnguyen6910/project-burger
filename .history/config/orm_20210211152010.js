//selectAll()
SELECT `burgers`.`burger_name`, `burgers`.`devoured` FROM `burgers_db`.`burgers`;

//insertOne()
// INSERT INTO `burgers_db`.`burgers`
// (`id`,
// `burger_name`,
// `devoured`)
// VALUES
// (<{id: }>,
// <{burger_name: }>,
// <{devoured: 0}>);

//updateOne()
// UPDATE `burgers_db`.`burgers`
// SET
// `id` = <{id: }>,
// `burger_name` = <{burger_name: }>,
// `devoured` = <{devoured: 0}>
// WHERE `id` = <{expr}>;
const connection = require("../config/connection.js")

var orm = {
    selectAll: function(tableName, cb) {
        connection.query('SELECT `burgers`.`burger_name`, `burgers`.`devoured` FROM `burgers_db`.`burgers`;', function(err, result) {
            if (err) throw err
            cb(result)
        })
    },
    insertOne: function(tableName, cb) {
        connection.query("", function(err, result) {
            if (err) throw err
            cb(result)
        })
    },
    updateOne: function(tableName, cb) {
        connection.query("", function(err, result) {
            if (err) throw err
            cb(result)
        })
    }
}




module.exports = orm;