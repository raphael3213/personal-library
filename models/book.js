var mongoose=require('mongoose')

var bookSchema=mongoose.Schema({

    title:String,
    id1:Number,
    comment:Array


})

module.exports=mongoose.model('books',bookSchema)



