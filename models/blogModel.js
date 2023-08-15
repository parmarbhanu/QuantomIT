const mongoose = require('mongoose');

const BlogSchema= new mongoose.Schema({
    nameofexp: {
         type: String,
          required:true
        },
    description: {
         type: String,
          required:true
         },
    deffcuilty:{
        type: Number,
        required:true,
         min: [1, `Rating can't be less than 1`],
         max:[5,`Rating can't be more than 5`]
    },
    subject:{
        type:String,
        required: true
    },
    materiallist:[
        {
        type:String,
        required: true
        }
],
    safety:{
        type:String,
        required: true

    },
    instruction:[
        {
        type:String,
        required: true
    }
]
    });

const Blog = mongoose.model('blog', BlogSchema);
module.exports=Blog;