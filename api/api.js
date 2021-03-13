const Sequelize = require('sequelize');
const crypto = require('crypto')
const nodemailer = require('nodemailer')
const express = require('express')
const bodyParser = require('body-parser');
const Model = Sequelize.Model

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',
    define:{
        timestamps: true
    }
});


class User extends Model{}
User.init({
    username:{
        type: Sequelize.STRING
    },
    name:{
        type: Sequelize.STRING
    },
    password:{
        type: Sequelize.STRING
    },
    salt:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    kana:{
        type: Sequelize.STRING
    },
    birthdate:{
        type: Sequelize.DATE
    },
    phone:{
        type: Sequelize.STRING
    },  
    role:{
        type: Sequelize.INTEGER
    },
    enabled:{
        type: Sequelize.BOOLEAN
    },
    accessed:{
        type: Sequelize.DATE
    },
    image:{
        type: Sequelize.STRING,
        allowNull: true
    },
    karateRank:{
        type: Sequelize.ARRAY,
        allowNull: true
    },
    kobudoRank:{
        type: Sequelize.ARRAY,
        allowNull: true
    },
    tuiteRank:{
        type: Sequelize.ARRAY,
        allowNull: true
    },
    karateInstructor:{
        type: Sequelize.DATE,
        allowNull: true
    },
    kobudoInstructor:{
        type: Sequelize.DATE,
        allowNull: true
    },
    tuiteInstructor:{
        type: Sequelize.DATE,
        allowNull: true
    },
    lawInstructor:{
        type: Sequelize.DATE,
        allowNull: true
    },
    parraRank:{
        type: Sequelize.ARRAY,
        allowNull: true
    },
    parraInstructor:{
        type: Sequelize.ARRAY,
        allowNull: true
    },
    attendance:{ // array of dates
        type: Sequelize.ARRAY
    }
},{
    sequelize,
    modelName:'user',
    timestamps: true
})
class Calendar extends Model{}
Calendar.init({
    name:{
        type: Sequelize.STRING
    },
    description:{
        type:Sequelize.STRING
    },
    color:{
        type: Sequelize.STRING
    },
    startTime:{
        type: Sequelize.TIME
    },
    endTime:{
        type: Sequelize.TIME
    },
    pattern:{ // weekly, monthly, quarterly, annually, one-time
        type: Sequelize.STRING
    }
},{
    sequelize,
    modelName:'calendar',
    timestamps: true
})
class Product extends Model{}
Product.init({
    name:{
        type: Sequelize.STRING
    },
    prices:{
        type: Sequelize.ARRAY
    },
    sizes:{
        type: Sequelize.ARRAY
    },
    category:{
        type: Sequelize.STRING
    },
    description:{
        type: Sequelize.STRING
    },
    src:{
        type: Sequelize.ARRAY
    }
},{
    sequelize,
    modelName:'product',
    timestamps: true
})
class Video extends Model{}
Video.init({
    title:{
        type: Sequelize.STRING
    },
    thumbnail:{
        type: Sequelize.STRING
    },
    data:{
        type: Sequelize.STRING
    },
    description:{
        type: Sequelize.STRING
    },
    kmin:{
        type: Sequelize.INTEGER
    },
    required:{
        type: Sequelize.BOOLEAN
    }
},{
    sequelize,
    modelName:'video',
    timestamps: true
})
class Blog extends Model{}
Blog.init({
    title:{
        type: Sequelize.STRING
    },
    description:{
        type: Sequelize.STRING
    },
    thumbnail:{
        type: Sequelize.STRING
    },
    string:{
        type: Sequelize.STRING
    }
})