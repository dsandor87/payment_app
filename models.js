const {Model, DataTypes, Sequelize} = require('sequelize')
const sequelize = new Sequelize("sqlite:./db.sql", {logging: false})

class UserMetadata extends Model {}

UserMetadata.init({
    sub: DataTypes.STRING,
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

UserMetadata.hasMany(Transaction)
UserMetadata.hasMany(Friends)

module.exports = {
    UserMetadata, sequelize, Transaction, Friends
}
