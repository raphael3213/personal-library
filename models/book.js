var mongoose=require('mongoose')

var bookSchema=mongoose.Schema({

    title:String,
    book_id:Number,
    comment:Array


})

module.exports=mongoose.model('books',bookSchema)



