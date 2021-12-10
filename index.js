const express =require('express');
const mongoose =require ('mongoose');
require('dotenv/config');
const app =express();
const bodyparser =require('body-parser');

app.get('/',(red, res)=>{
    res.send('We are in the root folder');
    app.use(bodyparser.json());

});
app.get('/complete_todos',(req,res)=>{
    res.send("we are in the completed todo folder");
});
app.post('/todos/', async (req, res)=>{
    const todo = todoModel.create({
        title: req.body.title,
        body: req.body.body,
        status: req.body.status, 
        endDate: req.body.endDate
    });
    try{
     const createTodo = await todo.save();
     res.json({
         data: createTodo,
         message: "Todo successfully created",
         status: true
     })
    }catch(err){
        res.json({message:err});
    }
});

mongoose.connect(process.env.DB_URL, ()=>console.log ('successfully connected'));


app.listen(process.env.PORT_NUMBER||2021);
