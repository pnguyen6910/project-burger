const express = require("express")
const router = express.Router()
const burger = require("../models/burger.js")

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject)
        res.render("index", hbsObject)
    })
})

router.post("/api/burgers", function(req,res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        res.json({id: result.insertId})
    })
})

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id
    console.log("condition", condition)

    burger.updateOne({
        
    })
})