const express = require('express')
const app = express();
const port = 8080;
const mongoose = require('mongoose')

const Class = mongoose.model('myClass', {
    className: String,
    StudentCount: Number
})

const Student = mongoose.model('Student', {
    name: String,
    classId: Number
})

app.post("/v1/myClass",async (req, res) => {
    const classData={
        className:req.body.class,
        StudentCount:req.body.StudentCount
    };
    const myClass=new Class(classData);
    myClass.save((err, data)=> {
       if(err){
        res.status(500).send(err)
       }else{
        res.status(201).send({id:data._id})
       }
    }) 
} )
app.listen(port, () => console.log(`App listening on port ${port}!`));

module.exports = app;
