const express = require('express')
const app = express()
const array_lib = require("./lib/arraycoba")
const object_lib = require("./lib/objectcoba")

/**
 * List of imported routes
 */
const array_routes = require('./routes/array')

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.send(`MASIH PAGI SEMANGAT DONG!`)
})


app.get("/pelangisatu", (req, res) => {
    let data = ["Merah", "Jingga", "Kuning", "Hijau", "Biru", "Nila", "Ungu"]
    console.log("before", data)

    let result = data.sort(function (a,b)
    {
        if (a<b) return -1;
        else if (a>b) return 1;
        return 0;
    });
    console.log("after", result)

    return res.send(result)
})

app.get("/pelangidua", (req, res) => {
    let data = ["Merah", "Jingga", "Kuning", "Hijau", "Biru", "Nila", "Ungu"]
    console.log("before", data)

    let result = data.sort(function (a,b)
    {
        if (a>b) return -1;
        else if (a<b) return 1;
        return 0;
    });
    console.log("after", result)

    return res.send(result)
})

//

/**
 * Set all routes
 */
app.use("/array", array_routes)

app.listen(8080, () => {
    console.log(`Example app listening on port 8080`)
})
