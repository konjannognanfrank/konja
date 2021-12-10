const mongoose =require('mongoose');

const TodoSchema =mongoose.Schema({
    title: {
        type: String,
        require: true
    },
        body:{
        type: String,
        require: true    
        },

    
startDate: {
    type: Date,
    default:Date.now
},
endDate : {
    type: Date,
    require : true
},

});
module.express.model('todoModel', TodoSchema);