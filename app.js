const http = require('http');

const express = require('express');
const bodyParser=require('body-parser')
const userRoutes=require('./routes/userroutes')
const app = express();

const cors=require('cors')

const sequelize=require('./utils/database');
const User = require('./model/user');

app.use(bodyParser.json({ extended: false }));

app.use(cors())

app.use('/user', userRoutes)

sequelize.sync().then((result)=>{
    app.listen(3000)
})
.catch(err=>{
    console.log(err)
})




//we now send all app.get/post/delete code to routes and controller to cleanup code


/* const http = require('http');

const express = require('express');
const bodyParser=require('body-parser')
const app = express();

const cors=require('cors')

const sequelize=require('./utils/database');
const User = require('./model/user');

app.use(bodyParser.json({ extended: false }));

app.use(cors())

app.post('/user/add-user', async(req,res)=>{
            try{
                if(!req.body.phonenumber){
                    throw new Error('PhoneNumber is mandatory')
                    //if u try to submit without giving phonenumber so it should give error msg to client
                }
            const name = req.body.name
            const phonenumber = req.body.phonenumber
            const email = req.body.email
    //User.create is promise based , it will take time,its async, once its successfully done, we get data
    //this data we send to frontend
    const data=await User.create({name:name,phonenumber:phonenumber,email:email})
    res.status(201).json({newUserDetail:data})
    }
    catch(err){
        res.status(500).json({error:err})
        //now if u give duplicate values also backend will not crash and will give status 500 at frontend
    }
})

app.get('/user/get-user', async(req, res) => {
   try{
    const users=await User.findAll()//User.findAll() for getting data from db
    res.status(200).json({allUsers:users})
    }
    catch(err){
        console.log('get user is failing',JSON.stringify(err)) 
        res.status(500).json({error:err})
    }
})

app.delete('/user/delete-user/:id', async(req,res)=>{
    try{
        if(req.params.id=='undefined'){
            console.log('id is missing')
            res.status(400).json('id is missing')
        }
        const uid=req.params.id
        await User.destroy({where:{id:uid}})
        res.sendStatus(200)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})


sequelize.sync().then((result)=>{
    app.listen(3000)
})
.catch(err=>{
    console.log(err)
})
 */