import db from("../db")
const Thing = db.model("Thing", {
    //hidden parameter _id will be created automatically
    name: {type:String, required:true},
    maker: String,
    amount: {type:Number, min:1, max:999},
    category: [String]
});

module.exports = Thing;