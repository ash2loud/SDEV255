const express = require("express");
var cors = require('cors');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const Thing = require("./models/things");
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

router.get("/things", async(req, res) =>{
    try{
        const things = await Thing.find({})
        res.send(things)
        console.log(things)
    }
    catch (err){
        console.error(err);
        res.status(500).send({ error: "Internal Server Error", details: err.message });
    }

})

app.use("/api" , router);
app.listen(2121);