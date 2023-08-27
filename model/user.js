const Sequelize=require('sequelize')

const sequelize=require('../utils/database')

const User=sequelize.define('user',{//adding table column details
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:Sequelize.STRING,
    email:{
        type:Sequelize.STRING,
        unique:true
        //if you give same data then it gives error
        //sqlMessage: "Duplicate entry 'a@g.com' for key 'users.email'", and backend crashes
        //now if you give correct data also then also db will not take since backend is crashed
        //in this case u should always use try catch
    },
    phonenumber:{
        type:Sequelize.STRING,
        unique:true
    },

})

module.exports=User