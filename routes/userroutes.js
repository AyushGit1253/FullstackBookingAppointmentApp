const express=require('express')

const router=express.Router()
const usercontroller=require('../controller/usercontroller')

//it was earlier app.post(.........)
//router.post('/user/add-user', usercontroller.addUser)//since app.js se /user aa rha n yaha bhi /user/add-user hoga
//toh 2 times /user/user/add-user ho jyega so use below

router.post('/add-user',usercontroller.addUser)

router.get('/get-user',usercontroller.getUser)

router.delete('/delete-user/:id', usercontroller.deleteUser)

module.exports=router









/* const express=require('express')

const router=express.Router()
const usercontroller=require('../controller/usercontroller')

//it was earlier app.post(.........), remove async and add it to controller file
router.post('/user/add-user', async(req,res)=>{
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

router.get('/user/get-user', async(req, res) => {
try{
const users=await User.findAll()//User.findAll() for getting data from db
res.status(200).json({allUsers:users})
}
catch(err){
console.log('get user is failing',JSON.stringify(err)) 
res.status(500).json({error:err})
}
})

router.delete('/user/delete-user/:id', async(req,res)=>{
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

module.exports=router */