const { Schema, model } = require("mongoose")
const bcrypt = require("bcrypt")
const userSchema = new Schema({
    name: {
        type: String,
        default: "no name"
    },
    userName: {
        type: String,
        default: "no name"
    },
    mail: {
        type: String,
        require: true,
        default: "enter correo",
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: [{ type: String }],
        required: true
    },
    ip: {
        type: String
    }

}, {
    timestamps: true
})

userSchema.methods.encryptPassword = async function() {
    this.password = await bcrypt.hash(this.password, 8)
}

userSchema.methods.comparePassword = async function(users) {
    return await bcrypt.compare(users, this.password)
}
userSchema.methods.encryptIp = async function() {
    this.ip = await bcrypt.hash(this.ip, 8)
}


const user = new model("users", userSchema)
module.exports = user