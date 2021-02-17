const express = require("express")
var PORT = process.env.PORT || 8080
const app = express()
const exphbs = require("express-handlebars")
const routes = require("./controllers/burgerController.js")

app.use(express.static("pubilc"))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes)

app.listen(PORT, () => {
    console.log("Server listening on: localhost" + PORT)
})