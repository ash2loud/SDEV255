const db = require("../db")
const Thing = db.model("Thing", {
    name: {type:String, required:true},
    maker: String,
    amount: {type:Number, min:1, max:999},
    category: [String]
})

module.export = Thing