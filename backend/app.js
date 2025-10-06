const express = require("express")
var cors = require('cors')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')
const Thing = require("./models/things")
app.use(cors())
app.use(bodyParser.json())

//grab all the things
router.get("/things", function(req,res){
    let query = {}
    if(req.query.genre){
        query = {genre :req.query.genre}
    }

    // to find all songs in a database, use the find method from mongoose
    Thing.find(query, function(err,things){
        if(err){
            res.status(400).send(err)
        }
        else{
            res.json(things)
        }
    })
})

app.use("/api" , router)
app.listen(2121)