const {Schema, model } = require("mongoose")
 const hworkSchema = new Schema({
    name:{
        type: String,
        default: "no name"
    },
    description:{
        type: String,
        default: "no description"
    },
    accomplished:{
        type: Boolean,
        default:"no checkeado" 
    }
 },{
     timestamps : true
 })
 const hWork = new model("hwork",hworkSchema)
 module.exports = hWork