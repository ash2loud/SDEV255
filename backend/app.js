const express = require("express");
const cors = require('cors');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const Thing = require("./models/things");
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());     

//gets all the things
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

//find and get one specific thing
router.get("/things/:id", async(req, res) =>{
    try{
        console.log('Requested ID:', req.params.id);
        const thing = await Thing.findById(req.params.id);
        console.log('Query result:', thing);
        if (!thing) {
            return res.status(404).send({ error: "Thing not found", id: req.params.id });
        }
        res.json(thing);
    }
    catch (err){
        console.error('Error in /things/:id route:', err);
        res.status(500).send({ error: "Internal Server Error", details: err.message });
    }
})

//update a thing
router.put("/things/:id", async(req, res) =>{
    try{
        const thing = req.body;
        await Thing.updateOne({_id:req.params.id}, thing);
        console.log(thing);
        res.sendStatus(204);
    }
    catch (err){
        console.error(err);
        res.status(400).send(err);
    }
});

//add a thing
router.post("/things", async(req, res) =>{
    try{
        const newThing = new Thing(req.body);   
        await newThing.save();
        console.log(newThing);
        res.status(201).json(newThing);
    }
    catch (err){
        console.error(err);
        res.status(500).json({ error: "Internal Server Error", details: err.message });
    }
})

//delete a thing
router.delete("/things/:id", async (req, res) => {
    try {
        await Thing.deleteOne({ _id: req.params.id });
        res.sendStatus(204);
        console.log('Deleted thing with ID:', req.params.id);
    } catch (err) {
        console.error(err);
        res.status(400).send({ error: "Delete failed", details: err.message });
    }  
});

app.use("/api" , router);
app.listen(2121);