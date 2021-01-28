const {Model, DataTypes, Sequelize} = require('sequelize')
const sequelize = new Sequelize("sqlite:./db.sql", {logging: false})

class User extends Model {}

User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    balance: DataTypes.FLOAT,
}, {sequelize: sequelize})

class Transaction extends Model {}

Transaction.init({
    from: DataTypes.STRING,
    to: DataTypes.STRING,
    amount: DataTypes.FLOAT
}, {sequelize: sequelize})

class Friends extends Model {}
Friends.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
}, {sequelize: sequelize})

User.hasMany(Transaction)
User.hasMany(Friends)

module.exports = {
    User, sequelize, Transaction, Friends
}
