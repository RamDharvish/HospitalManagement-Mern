const mongoose=require('mongoose')

const headSchema=mongoose.Schema({
    name:String,
    image:String,
    age:Number,
    number:Number,
    description:String,
    department:String
})

const headModel=mongoose.model("departmentHeads",headSchema)

module.exports =headModel