const mongoose=require('mongoose')

const departmentSchema=mongoose.Schema({
    name:String,
    image:String,
    year:Number,
    description:String
})
 const departmentModel=mongoose.model("departments",departmentSchema)

 module.exports=departmentModel