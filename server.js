const express = require("express")
const server = express()
const port = 8080

server.use(express.static('./src'));
server.set("view engine", "ejs")


server.get('/', (req, res) => {
    res.render("pages/index")
})

server.get("/sobre", (req, res) => {
    res.render("pages/sobre")
})

server.get("/contato", (req, res) => {
    res.render("pages/contato")
})

server.get("/login", (req, res) => {
    res.render("pages/login")
})

server.get("*", (req, res) => {
    res.render("pages/404")
})

server.listen(port, () => {
    console.log("")
    console.log(`Servidor iniciado na porta ${port}!`)
    console.log("")
})